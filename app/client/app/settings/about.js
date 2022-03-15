app.settings.about = (route) => a.div([
  route.mount({
    routes: {
      '/?': app.settings.about.edit,
      '/reload': app.settings.about.reload,
    },
  }),
])
