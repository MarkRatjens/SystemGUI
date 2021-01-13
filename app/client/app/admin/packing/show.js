app.admin.packing.show = (router) => (a, x) => [
  app.http({
    url: `/api/packing/${router.params.pack_id}`,
    placeholder: app.spinner('Loading pack'),
    success: (pack, el) => {
      el.$nodes = a({
        $tag: 'app-pack',
        $state: pack,
        $nodes: (el, pack) => [
          app.float({
            right: [
              app.button({
                label: app.icon("fas fa-drafting-compass", "Resolution"),
                onclick: () => router.open(`/admin/resolutions/${router.params.pack_id}`),
              }),
            ],
          }),
          a.br,
          app.http({
              url: `/api/packing/${router.params.pack_id}/commit`,
              success: (build, el) => {

                el.$nodes = build.built ?
                [
                  app.float({
                    left: a.h3('Built'),
                    right: [
                      app.button({
                        label: app.icon("fas fa-hammer", "Rebuild"),
                        onclick: () => router.open(`/admin/packing/${router.params.pack_id}/build`),
                        class: 'btn btn-warning',
                      }),
                    ],
                  }),
                  build.messages.map((message) => [
                    message.type == 'error' ?
                    a['pre.error'](message.output) :
                    a['pre.success'](message.output)
                  ])
                ] :
                [
                  app.float({
                    left: a['h3.error']('Unbuilt'),
                    right: [
                      app.button({
                        label: app.icon("fas fa-hammer", "Build"),
                        onclick: () => router.open(`/admin/packing/${router.params.pack_id}/build`),
                        class: 'btn btn-warning',
                      }),
                    ],
                  })
                ]

              }
            }),
          x.out(pack),
          a.hr,
          app.float({
            right: [
              app.button({
                label: app.icon("fa fa-trash", "Delete"),
                onclick: () => router.open(`/admin/packing/${router.params.pack_id}/delete`),
                class: "btn btn-outline-danger",
              }),
            ]
          }),
        ],
      })
    },
  }),
];
