app.admin.resolutions.show = (router) => (a, x) => {

  return app.fetch({
    url: [
      `/api/resolutions/${router.params.resolutionIdentifier}`,
      `/api/resolutions/${router.params.resolutionIdentifier}/status`,
    ],
    placeholder: app.spinner('Loading resolution'),
    success: ([resolution, status], el) => [
      app.float({
        left: [
          app.button({
            label: app.icon("fas fa-edit", "Edit"),
            onclick: () => router.open('edit'),
          }),
        ],
        right: [
          app.button({
            label: app.icon("fa fa-trash", "Delete"),
            onclick: () => router.open(`/admin/resolutions/${router.params.resolutionIdentifier}/delete`),
            class: "btn btn-outline-danger",
          }),
        ],
      }),
      a.hr,
      app.float({
        left: [
          !status.provisions.exist  && status.provisions.allowed ? app.button({
            label: app.icon("fas fa-server", "Create provisions"),
            onclick: () => router.open(`/admin/resolutions/${router.params.resolutionIdentifier}/provision`),
          }) : a._,
          !status.pack.exist && status.pack.allowed ? app.button({
            label: app.icon("fas fa-box-open", "Create pack"),
            onclick: () => router.open(`/admin/resolutions/${router.params.resolutionIdentifier}/pack`),
          }) : a._,
        ],
        right: [
          app.button({
            label: app.icon("fas fa-map", "Arena"),
            onclick: () => router.open(`/admin/arenas/${router.params.resolutionIdentifier.split('::')[0]}`),
          }),
          app.button({
            label: app.icon("fas fa-map", "Blueprint"),
            onclick: () => router.open(`/admin/blueprints/${router.params.resolutionIdentifier.split('::')[1]}`),
          }),
          status.provisions.exist ? app.button({
            label: app.icon("fas fa-server", "Provisions"),
            onclick: () => router.open(`/admin/provisioning/${router.params.resolutionIdentifier}`),
          }) : a._,
          status.pack.exist ? app.button({
            label: app.icon("fas fa-box-open", "Pack"),
            onclick: () => router.open(`/admin/packs/${router.params.resolutionIdentifier}`),
          }) : a._,
        ],
      }),
      a.hr,
      x.out(resolution),
    ],
  });
}
