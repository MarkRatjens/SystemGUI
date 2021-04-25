app.admin.blueprints.images.new = (router, blueprint) => (a,x) => a.div([
  app.admin.blueprints.form({
    router: router,
    form: app.admin.blueprints.images.form,
    update: (form) => {
      if (ax.is.array(blueprint.images)) {
        blueprint.images.push(form)
      } else {
        blueprint.images = [form]
      };
      return blueprint;
    },
  })
])
