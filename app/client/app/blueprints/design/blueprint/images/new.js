app.blueprints.design.blueprint.images.new = (route, blueprint) => (a,x) => a.div([
  app.blueprints.design.blueprint.form({
    route: route,
    form: app.blueprints.design.blueprint.images.form,
    digest: (form) => {
      if (ax.is.array(blueprint.images)) {
        blueprint.images.push(form)
      } else {
        blueprint.images = [form]
      };
      return {model: blueprint};
    },
  })
])
