app.settings = (route) => a.div([
  route.mount({
    routes: {
      '/?': app.settings.show,
      '/about/?*': app.settings.about,
      '/editor': app.settings.editor,
      '/user_keys/?*': app.user_keys,
      '/domains/?*': app.domains,
      '/providers/?*': app.providers,
      '/catalogs/?*': app.catalogs,
    },
  }),
])
