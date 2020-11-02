app.packs.show = (router) => (a, x) => [
  app.http({
    url: `/api/packs/${router.params.pack_id}`,
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
                onclick: () => router.open(`/resolutions/${router.params.pack_id}`),
              }),
            ],
          }),
          a.hr,
          x.out(pack),
          a.hr,
          app.float({
            right: [
              app.button({
                label: app.icon("fa fa-trash", "Delete"),
                onclick: () => router.open(`/packs/${router.params.pack_id}/delete`),
                class: "btn btn-outline-danger",
              }),
            ]
          }),
        ],
      })
    },
  }),
];
