app.dashboard.system.network = (router) => (a,x) => [

  app.close(() => router.open('..')),
  a.h1('Network'),
  app.dashboard.system.charts.networkInterfaces(router),

]
