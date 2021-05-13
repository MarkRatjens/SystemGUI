app.admin.packs.show = (router) => (a, x) => a.div([
  app.fetch({
    url: `/api/packs/${router.params.resolutionIdentifier}`,
    placeholder: app.spinner('Loading pack'),
    success: (pack, el) => [
      app.float({
        left: [
          app.button({
            label: app.icon("fas fa-hammer", "Commit"),
            onclick: () => router.open(`/admin/packs/${router.params.resolutionIdentifier}/commit`),
          }),
        ],
        right: [
          app.button({
            label: app.icon("fa fa-trash", "Delete"),
            onclick: () => router.open(`/admin/packs/${router.params.resolutionIdentifier}/delete`),
            class: "btn btn-outline-danger",
          }),
        ]
      }),
      a.hr,
      app.float({
        left: [
          app.button({
            label: app.icon("fas fa-truck-loading", "Artifact"),
            onclick: () => router.open(`artifact`),
          }),
        ],
        right: [
          app.button({
            label: app.icon("fas fa-drafting-compass", "Resolution"),
            onclick: () => router.open(`/admin/resolutions/${router.params.resolutionIdentifier}`),
          }),
        ],
      }),
      a.hr,
      x.out(pack),
    ],
  }),
]);
