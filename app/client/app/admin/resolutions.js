app.admin.resolutions = (route) => (a, x) => a.div([
  route.mount({
    routes: {
      "/?": app.admin.resolutions.index,
      "/:resolutionIdentifier*": app.admin.resolutions.resolution,
    }
  }),
]);
