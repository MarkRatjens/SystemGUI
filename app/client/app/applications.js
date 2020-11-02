app.applications = (router) => (a, x) => [
  router.mount({
    routes: {
      "/?": app.applications.index,
      "/~new": app.applications.new,
      "/:application_id*": app.applications.application,
    }
  }),
];
