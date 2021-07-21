app.blueprints.design.specification.images.new = (route, specification) => (a,x) => a.div([
  app.blueprints.design.specification.form({
    route: route,
    form: app.blueprints.design.specification.images.form,
    digest: (form) => {
      if (ax.is.array(specification.images)) {
        specification.images.push(form)
      } else {
        specification.images = [form]
      };
      return {specification: specification};
    },
  })
])
