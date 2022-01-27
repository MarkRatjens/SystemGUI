app.arenas.instructions = (route) => (a,x) => a['app-arenas-instructions']([
  a.h3('Instructions'),
  route.mount({
    routes: {
      '/?': app.arenas.instructions.show,
      '/:instruction': app.arenas.instructions.output,
    }
  }),
])
