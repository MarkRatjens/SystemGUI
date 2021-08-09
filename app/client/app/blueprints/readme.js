app.blueprints.readme = (route) => (a,x) => a['app-blueprints-readme']([
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/readme`,
    placeholder: app.spinner('Loading blueprint readme'),
    success: (readme, el) => [
      readme ? app.md(readme) : app.placeholder('No readme'),
    ],
  }),
])
