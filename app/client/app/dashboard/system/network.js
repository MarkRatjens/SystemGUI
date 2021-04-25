app.dashboard.system.network = (router) => (a,x) => a.div([

//   app.closeOld(() => router.open('..')),

  app.close(router),
  a.h1('Network'),
  app.dashboard.system.charts.networkInterfaces(router),

])
