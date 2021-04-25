app.admin.resolutions.domain.preview = (router, resolution) => (a,x) =>
resolution.domain ?
app.clickable(
  a['div.p-1.overflow-auto'](
    a.h3(resolution.domain.identifier)
  ),
  () => router.open('domain')
) : a._
