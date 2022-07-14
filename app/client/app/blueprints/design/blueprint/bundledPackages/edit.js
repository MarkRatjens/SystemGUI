app.blueprints.design.blueprint.bundledPackages.edit = (route, blueprint) => a.div([
  `Bundled package ${Number(route.params.bundled_package_id) + 1}`,
  app.blueprints.design.blueprint.form({
    route: route,
    object: blueprint.bundled_packages[route.params.bundled_package_id],
    form: app.blueprints.design.blueprint.bundledPackages.form,
    digest: (form) => {
      blueprint.bundled_packages[route.params.bundled_package_id] = app.compact(form);
      return {model: blueprint};
    },
  })
])
