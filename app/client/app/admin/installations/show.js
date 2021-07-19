app.admin.installations.show = (route) => (a, x) => {

  return app.fetch({
    url: [
      `/api/installations/${route.params.installationIdentifier}`,
      `/api/installations/${route.params.installationIdentifier}/status`,
    ],
    placeholder: app.spinner('Loading installation'),
    success: ([installation, status], el) => [
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
            onclick: () => route.open(`/admin/installations/${route.params.installationIdentifier}/delete`),
            class: "btn btn-outline-danger",
          }),
        ],
      }),
      a.hr,
      app.float({
        left: [
          // !status.resolution.exist ? app.button({
          //   label: app.icon("fas fa-server", "Create resolution"),
          //   onclick: () => route.open(`/admin/installations/${route.params.installationIdentifier}/provision`),
          // }) : a._,
          // !status.pack.exist && status.pack.allowed ? app.button({
          //   label: app.icon("fas fa-box-open", "Create pack"),
          //   onclick: () => route.open(`/admin/installations/${route.params.installationIdentifier}/pack`),
          // }) : a._,
        ],
        right: [
          app.button({
            label: app.icon("fas fa-map", "Arena"),
            onclick: () => route.open(`/admin/arenas/${route.params.installationIdentifier.split('::')[0]}`),
          }),
          app.button({
            label: app.icon("fas fa-map", "Blueprint"),
            onclick: () => route.open(`/admin/blueprints/${route.params.installationIdentifier.split('::')[1]}`),
          }),
          status.resolution.exist ? app.button({
            label: app.icon("fas fa-pencil-ruler", "Resolution"),
            onclick: () => route.open(`/admin/resolutions/${route.params.installationIdentifier}`),
          }) : a._,
        ],
      }),
      a.hr,
      x.out(installation),
      a.hr,
      x.out(status),
    ],
  });
}
