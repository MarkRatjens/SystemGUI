app.arenas.arena = (route) => (a,x) => a['app-arenas-arena']([
  app.close(route),
  a.h1([route.params.arenaIdentifier]),
  route.mount({
    routes: {
      '/?': app.arenas.show,
      '/edit': app.arenas.edit,
      '/delete': app.arenas.delete,
      '/resolve': app.arenas.resolve,
      '/pack': app.arenas.pack,
      '/@:blueprintIdentifier/?*': app.arenas.installation,
    }
  }),
])
