app.blueprints.license = (route) => (a,x) => a['app-blueprints-license']([
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/license`,
    placeholder: app.spinner('Loading blueprint license'),
    success: (license, el) => [
      license ? app.md(license) : app.placeholder('No license'),
    ],
  }),
])
