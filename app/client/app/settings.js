app.settings = (route) => (a, x) => [
  a.h1("Settings"),
  route.mount({
    routes: {
      '/?': app.settings.edit,
      '/reload': app.settings.reload,
    },
  }),
];
