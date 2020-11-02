app.system.network = (router) => (a,x) => [

  app.close(() => router.open('..')),
  a.h1('Network'),
  app.system.charts.networkInterfaces(router),

]
