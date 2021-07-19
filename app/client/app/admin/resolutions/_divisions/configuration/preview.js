app.admin.resolutions.configuration.preview = (route, resolution) => (a,x) =>
resolution.configuration ?
app.clickable(
  a['div.p-1.overflow-auto']([
    a.div('Configuration'),
    x.out(resolution.configuration),
  ]),
  () => route.open('configuration')
) : a._
