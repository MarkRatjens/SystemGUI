app.blueprints.design.blueprint.bundledPackages.new = (route, blueprint) => a.div([
  'New bundled package',
  app.blueprints.design.blueprint.form({
    route: route,
    form: app.blueprints.design.blueprint.bundledPackages.form,
    digest: (form) => {
      form = app.compact(form)
      if (ax.is.array(blueprint.bundled_packages)) {
        blueprint.bundled_packages.push(form)
      } else {
        blueprint.bundled_packages = [form]
      };
      return {model: blueprint};
    },
  })
])
