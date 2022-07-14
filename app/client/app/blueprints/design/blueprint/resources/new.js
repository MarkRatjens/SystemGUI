app.blueprints.design.blueprint.resources.new = (route, blueprint) => a.div([
  app.blueprints.design.blueprint.form({
    route: route,
    form: app.blueprints.design.blueprint.resources.form,
    digest: (form) => {
      blueprint.resources = [...(blueprint.resources || []), app.compact(form)];
      return {model: blueprint};
    },
  })
])
