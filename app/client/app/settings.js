app.settings = (route) => (a, x) => [
  app.close(route),
  a.h1("Settings"),
  route.mount({
    routes: {
      '/?': app.settings.show,
      '/appearance': app.settings.appearance,
      '/keys/?*': app.settings.keys,
      '/editor': app.settings.editor,
    },
  }),
];
