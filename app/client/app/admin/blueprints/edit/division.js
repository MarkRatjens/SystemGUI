app.admin.blueprints.edit.division = (router, blueprint, division) => (a,x) =>
blueprint[division] ?
app.clickable(
  a['div.p-1.overflow-auto'](app.admin.blueprints[division].preview(router, blueprint)),
  () => router.open(division)
) : a._
