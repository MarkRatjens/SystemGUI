app.admin.resolutions.show.division = (router, resolution, division) => (a,x) =>
app.clickable(
  a['div.p-1.overflow-auto'](app.admin.resolutions[division].preview(router, resolution)),
  () => router.open(division)
)
