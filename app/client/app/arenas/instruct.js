app.arenas.instruct = (route) => (a,x) => a['app-arenas-instruct']([
  a.h3('Instruct'),
  route.mount({
    routes: {
      '/?': app.arenas.instruct.show,
      '/:instruction': app.arenas.instruct.output,
    }
  }),
])
