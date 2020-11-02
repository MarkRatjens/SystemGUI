app.resolutions.show.division = (router, resolution, division) => (a,x) =>
app.clickable(
  a.div(app.resolutions[division].preview(router, resolution)),
  () => router.open(division)
)
