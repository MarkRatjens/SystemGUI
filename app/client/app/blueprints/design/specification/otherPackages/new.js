app.blueprints.design.specification.otherPackages.new = (route, specification) => (a,x) => a.div([
  app.blueprints.design.specification.form({
    route: route,
    form: app.blueprints.design.specification.otherPackages.form,
    update: (form) => {
      form = app.compact(form)
      if (ax.is.array(specification.other_packages)) {
        specification.other_packages.push(form)
      } else {
        specification.other_packages = [form]
      };
      return {specification: specification};
    },
  })
])
