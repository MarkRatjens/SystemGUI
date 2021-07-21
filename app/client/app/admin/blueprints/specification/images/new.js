app.admin.blueprints.specification.images.new = (route, specification) => (a,x) => a.div([
  app.admin.blueprints.specification.form({
    route: route,
    form: app.admin.blueprints.specification.images.form,
    digest: (form) => {
      if (ax.is.array(specification.images)) {
        specification.images.push(form)
      } else {
        specification.images = [form]
      };
      return specification;
    },
  })
])
