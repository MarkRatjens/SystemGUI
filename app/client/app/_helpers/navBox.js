app.navBox = (route, component, path) => app.clickable(
  a['div.p-1.overflow-auto'](component),
  () => route.open(path)
)
