app.system.show = (router) => (a,x) => [

  app.close(() => router.open('..')),
  a.h1('System'),

  app.system.charts.softwareTopology(router),

  app.clickable(
    app.system.charts.networkOverview(router),
    () => router.open('network'),
  ),

]
