app.admin.resolutions.show = (route) => (a, x) => {

  return app.fetch({
    url: [
      `/api/resolutions/${route.params.resolutionIdentifier}`,
      `/api/resolutions/${route.params.resolutionIdentifier}/status`,
    ],
    placeholder: app.spinner('Loading resolution'),
    success: ([resolution, status], el) => [
      app.float({
        left: [
          app.button({
            label: app.icon("fas fa-edit", "Edit"),
            onclick: () => route.open('edit'),
          }),
        ],
        right: [
          app.button({
            label: app.icon("fa fa-trash", "Delete"),
            onclick: () => route.open(`/admin/resolutions/${route.params.resolutionIdentifier}/delete`),
            class: "btn btn-outline-danger",
          }),
        ],
      }),
      a.hr,
      app.float({
        left: [
          !status.provisions.exist  && status.provisions.allowed ? app.button({
            label: app.icon("fas fa-server", "Create provisions"),
            onclick: () => route.open(`/admin/resolutions/${route.params.resolutionIdentifier}/provision`),
          }) : a._,
          !status.pack.exist && status.pack.allowed ? app.button({
            label: app.icon("fas fa-box-open", "Create pack"),
            onclick: () => route.open(`/admin/resolutions/${route.params.resolutionIdentifier}/pack`),
          }) : a._,
        ],
        right: [
          app.button({
            label: app.icon("fas fa-map", "Arena"),
            onclick: () => route.open(`/admin/arenas/${route.params.resolutionIdentifier.split('::')[0]}`),
          }),
          app.button({
            label: app.icon("fas fa-map", "Blueprint"),
            onclick: () => route.open(`/admin/blueprints/${route.params.resolutionIdentifier.split('::')[1]}`),
          }),
          status.provisions.exist ? app.button({
            label: app.icon("fas fa-server", "Provisions"),
            onclick: () => route.open(`/admin/provisioning/${route.params.resolutionIdentifier}`),
          }) : a._,
          status.pack.exist ? app.button({
            label: app.icon("fas fa-box-open", "Pack"),
            onclick: () => route.open(`/admin/packs/${route.params.resolutionIdentifier}`),
          }) : a._,
        ],
      }),
      a.hr,
      x.out(resolution),
      a.hr,
      x.out(status),
    ],
  });
}
