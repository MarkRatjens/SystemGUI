app.blueprints.design = (route) => (a,x) => a.div([
  route.mount({
    routes: {
      "/location": app.blueprints.design.location,
      // "/publish": app.blueprints.design.publish,
      // "/unpublish": app.blueprints.design.unpublish,
      "/export": app.blueprints.design.export,
      "/branch": app.blueprints.design.branch,
      '*': app.blueprints.design.show,
    },
  }),
]);
