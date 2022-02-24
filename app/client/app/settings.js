app.settings = (route) => a.div([
  a.h1("Settings"),
  route.mount({
    routes: {
      '/?': app.settings.edit,
      '/reload': app.settings.reload,
    },
  }),
])
