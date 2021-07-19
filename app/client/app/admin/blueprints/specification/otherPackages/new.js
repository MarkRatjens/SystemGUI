app.admin.blueprints.specification.otherPackages.new = (route, specification) => (a,x) => a.div([
  app.admin.blueprints.specification.form({
    route: route,
    form: app.admin.blueprints.specification.otherPackages.form,
    update: (form) => {
      form = app.compact(form)
      if (ax.is.array(specification.other_packages)) {
        specification.other_packages.push(form)
      } else {
        specification.other_packages = [form]
      };
      return specification;
    },
  })
])
