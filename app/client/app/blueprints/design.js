app.blueprints.design = (route) => (a,x) => a.div([
  route.mount({
    routes: {
      "/location": app.blueprints.design.location,
      "/export": app.blueprints.design.export,
      "/export/output": app.blueprints.design.export.output,
      "/branch": app.blueprints.design.branch,
      '/copy': app.blueprints.design.copy,
      '*': app.blueprints.design.show,
    },
  }),
]);
