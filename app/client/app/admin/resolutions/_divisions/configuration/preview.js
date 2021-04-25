app.admin.resolutions.configuration.preview = (router, resolution) => (a,x) =>
resolution.configuration ?
app.clickable(
  a['div.p-1.overflow-auto']([
    a.div('Configuration'),
    x.out(resolution.configuration),
  ]),
  () => router.open('configuration')
) : a._
