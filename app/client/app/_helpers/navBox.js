app.navBox = (route, component, path) => (a, x) => app.clickable(
  a['div.p-1.overflow-auto'](component),
  () => route.open(path)
)
