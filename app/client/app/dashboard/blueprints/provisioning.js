app.dashboard.blueprints.provisioning = (router) => (a, x) => {

  return router.mount({
    routes: {
      '/add_provisions': app.dashboard.blueprints.provisioning.add,
      '/remove_provisions': app.dashboard.blueprints.provisioning.remove,
      '*': app.dashboard.blueprints.provisioning.show,
    },
  });

}
