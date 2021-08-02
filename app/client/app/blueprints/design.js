app.blueprints.design = (route) => (a,x) => a.div([
  route.mount({
    routes: {
      "/location": app.blueprints.design.location,
      "/export": app.blueprints.design.export,
      "/branch": app.blueprints.design.branch,
      '*': app.blueprints.design.show,
    },
  }),
]);
