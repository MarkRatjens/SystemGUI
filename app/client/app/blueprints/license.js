app.blueprints.license = (route) => a['app-blueprints-license']([
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/license`,
    placeholder: app.spinner('Loading blueprint license'),
    success: (license, el) => a.div([
      license ? app.md(license) : app.placeholder('No license'),
    ]),
  }),
])
