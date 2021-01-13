app.admin.blueprints.containers.new = (router, blueprint) => (a,x) => [
  app.admin.blueprints.form({
    router: router,
    form: app.admin.blueprints.containers.form,
    update: (form) => {
      if (ax.is.array(blueprint.containers)) {
        blueprint.containers.push(form)
      } else {
        blueprint.containers = [form]
      };
      return blueprint;
    },
  })
]
