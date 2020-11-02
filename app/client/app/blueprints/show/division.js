app.blueprints.show.division = (router, blueprint, division) => (a,x) =>
app.clickable(
  a.div(app.blueprints[division].preview(router, blueprint)),
  () => router.open(division)
)
