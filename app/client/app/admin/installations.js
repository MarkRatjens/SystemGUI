app.admin.installations = (route) => (a, x) => a.div([
  route.mount({
    routes: {
      "/?": app.admin.installations.index,
      "/:installationIdentifier*": app.admin.installations.installation,
    }
  }),
]);
