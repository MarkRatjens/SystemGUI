app.admin.blueprints.other_packages.new = (router, blueprint) => (a,x) => a.div([
  app.admin.blueprints.form({
    router: router,
    form: app.admin.blueprints.other_packages.form,
    update: (form) => {
      form = app.compact(form)
      if (ax.is.array(blueprint.other_packages)) {
        blueprint.other_packages.push(form)
      } else {
        blueprint.other_packages = [form]
      };
      return blueprint;
    },
  })
])
