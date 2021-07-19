app.admin.resolutions.domain.preview = (route, resolution) => (a,x) =>
resolution.domain ?
app.clickable(
  a['div.p-1.overflow-auto'](
    a.h3(resolution.domain.identifier)
  ),
  () => route.open('domain')
) : a._
