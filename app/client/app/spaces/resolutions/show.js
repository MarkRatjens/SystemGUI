app.spaces.resolutions.show = (router) => (a, x) => [
  app.close(router, `/arenas/${router.params.resolutionIdentifier.split('::')[0]}`),
  a.h1(`${router.params.resolutionIdentifier}`),
  a.hr,
  app.fetch({
    url: `/api/resolutions/${router.params.resolutionIdentifier}`,
    placeholder: app.spinner("Loading"),
    success: (resolution) => [
      // app.spaces.resolutions.show.chart(router, resolution),
      // router.mount({
      //   routes: {
      //     '/?': x.out(resolution),
      //     '/binding': app.spaces.resolutions.binding,
      //     '/configure': app.spaces.resolutions.configure,
      //   },
      // }),
      router.mount({
        routes: {
          '/?': router => app.spaces.resolutions.show.body(router, resolution),
          '/domain': router => app.admin.resolutions.domain(router, resolution),
          '/binding': router => app.admin.resolutions.bindings.edit(router, resolution),
          '/configuration': router => app.admin.resolutions.configuration.edit(router, resolution),
          // '/?*': router => app.admin.resolutions.edit.body(router, resolution),
          // '/binding': router => app.spaces.resolutions.binding(router, resolution),
          // '/bindings*': router => app.spaces.resolutions.bindings(router, resolution),
          // '/json*': router => resolution,
        },
        transition: ['fade', {duration: 100}],
        lazy: false,
      })
    ]
  }),
]
