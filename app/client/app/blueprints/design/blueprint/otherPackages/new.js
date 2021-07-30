app.blueprints.design.blueprint.otherPackages.new = (route, blueprint) => (a,x) => a.div([
  app.blueprints.design.blueprint.form({
    route: route,
    form: app.blueprints.design.blueprint.otherPackages.form,
    digest: (form) => {
      form = app.compact(form)
      if (ax.is.array(blueprint.other_packages)) {
        blueprint.other_packages.push(form)
      } else {
        blueprint.other_packages = [form]
      };
      return {blueprint: blueprint};
    },
  })
])
