app.admin.blueprints.specification.images.edit = (route, specification) =>
app.admin.blueprints.specification.form({
  route: route,
  object: specification.images[route.params.image_id],
  form: app.admin.blueprints.specification.images.form,
  digest: (form) => {
    specification.images[route.params.image_id] = form;
    return specification;
  },
})
