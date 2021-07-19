app.arenas.installation = (route) => (a,x) => [
  a.h3(route.params.blueprintIdentifier),
  route.mount({
    routes: {
      '/?': app.arenas.installation.show,
      '/edit/?': app.arenas.installation.edit,
      // '/design/?*': app.installations.design,
    }
  }),
]
