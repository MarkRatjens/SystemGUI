app.admin.installations.configuration.preview = (route, installation) => (a,x) =>
installation.configuration ?
app.clickable(
  a['div.p-1.overflow-auto']([
    a.div('Configuration'),
    x.out(installation.configuration),
  ]),
  () => route.open('configuration')
) : a._
