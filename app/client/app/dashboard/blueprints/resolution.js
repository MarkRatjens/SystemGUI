app.dashboard.blueprints.resolution = (router, resolution) => (a, x) => [

  a({
    $nodes: [
      app.dashboard.blueprints.domain(router, resolution),
      a.hr,
      app.dashboard.blueprints.bindings(router, resolution),
      app.dashboard.blueprints.validity(router, resolution),
    ],
    $on: {
      update: (e, el) => el.$('app-resolution-validity').$render()
    }
  }),

];
