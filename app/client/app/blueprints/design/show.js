app.blueprints.design.show = (route) => (a, x) => [
  a['div.mb-1'](app.blueprints.design.menu(route)),
  route.mount({
    routes: {
      '/icon/?*': app.blueprints.design.icon,
      '/readme/?*': app.blueprints.design.readme,
      '/license/?*': app.blueprints.design.license,
      '/form/?*': app.blueprints.design.form,
      '/files/?*': app.blueprints.design.files,
      '*': app.blueprints.design.blueprint,
    }
  }),
]
