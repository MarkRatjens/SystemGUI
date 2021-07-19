app.admin.provisioning.show = (route) => (a, x) => a.div([
  app.fetch({
    url: `/api/provisioning/${route.params.resolutionIdentifier}`,
    placeholder: app.spinner('Loading provisions'),
    success: (provisions, el) => [
      app.float({
        right: [
          app.button({
            label: app.icon("fa fa-trash", "Delete"),
            onclick: () => route.open(`/admin/provisioning/${route.params.resolutionIdentifier}/delete`),
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
      x.out(provisions),
    ],
  }),
]);
