app.arenas.arena = (route) => (a,x) => a['app-arenas-arena']([
  app.close(route),
  a.h1([route.params.arenaIdentifier]),
  route.mount({
    routes: {
      '/?': app.arenas.show,
      '/edit': app.arenas.edit,
      '/delete': app.arenas.delete,
      '/installations': app.arenas.installations,
      '/@:blueprintIdentifier/?*': app.arenas.installation,
      // '/design/?*': app.arenas.design,
    }
  }),
])
