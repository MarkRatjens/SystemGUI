app.blueprints.design.blueprint.otherPackages.edit = (route, blueprint) => a.div([
  `Other package ${Number(route.params.other_package_id) + 1}`,
  app.blueprints.design.blueprint.form({
    route: route,
    object: blueprint.other_packages[route.params.other_package_id],
    form: app.blueprints.design.blueprint.otherPackages.form,
    digest: (form) => {
      blueprint.other_packages[route.params.other_package_id] = app.compact(form);
      return {model: blueprint};
    },
  })
])
