app.dashboard.system = (router) => (a, x) => [

  // app.close(() => router.open('/')),
  // a.h1('System'),
  //
  // app.dashboard.system.arenas.index(router),
  //
  //
  // a.hr,


  router.mount({
    routes: {
      "/?": app.dashboard.system.show,
      "/network": app.dashboard.system.network,
      "/arenas*": app.dashboard.arenas,
      "/blueprints*": app.dashboard.blueprints,
    }
  }),
];
