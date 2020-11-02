app.system = (router) => (a, x) => [
  router.mount({
    routes: {
      "/?": app.system.show,
      "/network": app.system.network,
    }
  }),
];
