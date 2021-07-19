app.admin.packs.show = (route) => (a, x) => a.div([
  app.fetch({
    url: `/api/packs/${route.params.resolutionIdentifier}`,
    placeholder: app.spinner('Loading pack'),
    success: (pack, el) => [
      app.float({
        left: [
          app.button({
            label: app.icon("fas fa-vote-yea", "Commit"),
            onclick: () => route.open(`/admin/packs/${route.params.resolutionIdentifier}/commit`),
          }),
        ],
        right: [
          app.button({
            label: app.icon("fa fa-trash", "Delete"),
            onclick: () => route.open(`/admin/packs/${route.params.resolutionIdentifier}/delete`),
            class: "btn btn-outline-danger",
          }),
        ]
      }),
      a.hr,
      app.float({
        left: [
          app.button({
            label: app.icon("fas fa-truck-loading", "Artifact"),
            onclick: () => route.open(`artifact`),
          }),
        ],
        right: [
          app.button({
            label: app.icon("fas fa-pencil-ruler", "Resolution"),
            onclick: () => route.open(`/admin/resolutions/${route.params.resolutionIdentifier}`),
          }),
        ],
      }),
      a.hr,
      x.out(pack),
    ],
  }),
]);
