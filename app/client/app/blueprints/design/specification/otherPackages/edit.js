app.blueprints.design.specification.otherPackages.edit = (route, specification) =>
app.blueprints.design.specification.form({
  route: route,
  object: specification.other_packages[route.params.other_package_id],
  form: app.blueprints.design.specification.otherPackages.form,
  digest: (form) => {
    specification.other_packages[route.params.other_package_id] = app.compact(form);
    return {specification: specification};
  },
})
