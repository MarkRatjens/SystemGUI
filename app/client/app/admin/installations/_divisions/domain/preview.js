app.admin.installations.domain.preview = (route, installation) => (a,x) =>
installation.domain ?
app.clickable(
  a['div.p-1.overflow-auto'](
    a.h3(installation.domain.identifier)
  ),
  () => route.open('domain')
) : a._
