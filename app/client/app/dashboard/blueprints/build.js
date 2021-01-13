app.dashboard.blueprints.build = (router) => (a, x) => [

  router.mount({
    routes: {
      "/build": app.dashboard.blueprints.build.perform,
      "*": app.dashboard.blueprints.build.show,
    },
    lazy: true,
  }),

]
