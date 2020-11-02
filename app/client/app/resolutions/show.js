app.resolutions.show = (router) => (a, x) => [
  app.http({
    url: `/api/resolutions/${router.params.resolution_id}`,
    placeholder: app.spinner('Loading resolution'),
    success: (resolution, el) => {
      el.$nodes = a({
        $tag: 'app-resolution',
        $state: resolution,
        $nodes: (el, resolution) => [
          app.float({
            left: app.button({
              label: app.icon("fa fa-file-code", "JSON"),
              onclick: () => router.open(`/resolutions/${router.params.resolution_id}/json`),
              class: "btn btn-outline-info",
            }),
            right: [
              app.button({
                label: app.icon("fas fa-map", "Blueprint"),
                onclick: () => router.open(`/blueprints/${router.params.resolution_id}`),
              }),
              app.button({
                label: app.icon("fas fa-box-open", "Pack"),
                onclick: () => router.open(`/packs/${router.params.resolution_id}`),
              }),
            ],
          }),
          a.hr,
          a['div.row']([
            a['div.col-3'](app.resolutions.show.menu(router, resolution)),
            a['div.col-9'](app.resolutions.show.body(router, resolution)),
          ]),
          a.hr,
          app.float({
            right: [
              app.button({
                label: app.icon("fa fa-trash", "Delete"),
                onclick: () => router.open(`/resolutions/${router.params.resolution_id}/delete`),
                class: "btn btn-outline-danger",
              }),
            ]
          }),
        ],
      })
    },
  }),
];
