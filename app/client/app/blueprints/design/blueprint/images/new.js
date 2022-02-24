app.blueprints.design.blueprint.images.new = (route, blueprint) => a.div([
  app.blueprints.design.blueprint.form({
    route: route,
    form: app.blueprints.design.blueprint.images.form,
    digest: (form) => {
      blueprint.images.push(app.compact(form));
      return {model: blueprint};
    },
  })
])
