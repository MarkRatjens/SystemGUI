app.spaces.resolutions.show = (router) => (a, x) => [
  app.close(router, `/arenas/${router.params.resolutionIdentifier.split('::')[0]}`),
  a.h1(`${router.params.resolutionIdentifier}`),
  a.hr,
  app.fetch({
    url: [
      `/api/resolutions/${router.params.resolutionIdentifier}`,
      `/api/resolutions/${router.params.resolutionIdentifier}/status`,
    ],
    placeholder: app.spinner("Loading"),
    success: ([resolution, status]) => [

      // app.float({
      //   left: [
      //     !status.provisions.exist  && status.provisions.allowed ? app.button({
      //       label: app.icon("fas fa-server", "Create provisions"),
      //       onclick: () => router.open(`/admin/resolutions/${router.params.resolutionIdentifier}/provision`),
      //     }) : a._,
      //     !status.pack.exist && status.pack.allowed ? app.button({
      //       label: app.icon("fas fa-box-open", "Create pack"),
      //       onclick: () => router.open(`/admin/resolutions/${router.params.resolutionIdentifier}/pack`),
      //     }) : a._,
      //   ],
      //   right: [
      //     app.button({
      //       label: app.icon("fas fa-map", "Arena"),
      //       onclick: () => router.open(`/admin/arenas/${router.params.resolutionIdentifier.split('::')[0]}`),
      //     }),
      //     app.button({
      //       label: app.icon("fas fa-map", "Blueprint"),
      //       onclick: () => router.open(`/admin/blueprints/${router.params.resolutionIdentifier.split('::')[1]}`),
      //     }),
      //     status.provisions.exist ? app.button({
      //       label: app.icon("fas fa-server", "Provisions"),
      //       onclick: () => router.open(`/admin/provisioning/${router.params.resolutionIdentifier}`),
      //     }) : a._,
      //     status.pack.exist ? app.button({
      //       label: app.icon("fas fa-box-open", "Pack"),
      //       onclick: () => router.open(`/admin/packs/${router.params.resolutionIdentifier}`),
      //     }) : a._,
      //   ],
      // }),
      // a.hr,


      router.mount({
        routes: {
          '/?': router => app.spaces.resolutions.show.body(router, resolution),
          '/domain': router => app.admin.resolutions.domain(router, resolution),
          '/binding': router => app.admin.resolutions.bindings.edit(router, resolution),
          '/configuration': router => app.admin.resolutions.configuration.edit(router, resolution),
        },
        transition: ['fade', {duration: 100}],
        lazy: false,
      })
    ]
  }),
]
