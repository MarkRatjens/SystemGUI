app.dashboard.blueprints.about = (router, blueprint) => (a, x) => [
  app.admin.blueprints.title.preview(router, blueprint),
  app.admin.blueprints.description.preview(router, blueprint),
  app.admin.blueprints.licenses.preview(router, blueprint),
];
