app.blueprints.design.specification.images.edit = (route, specification) =>
app.blueprints.design.specification.form({
  route: route,
  object: specification.images[route.params.image_id],
  form: app.blueprints.design.specification.images.form,
  update: (form) => {
    specification.images[route.params.image_id] = form;
    return {specification: specification};
  },
})
