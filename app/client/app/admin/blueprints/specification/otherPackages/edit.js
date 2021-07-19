app.admin.blueprints.specification.otherPackages.edit = (route, specification) =>
app.admin.blueprints.specification.form({
  route: route,
  object: specification.other_packages[route.params.other_package_id],
  form: app.admin.blueprints.specification.otherPackages.form,

  update: (form) => {
    // debugger
    // if (form.other_packages.length) {
    //   specification.other_packages = form.other_packages
    // } else {
    //   delete specification.other_packages
    // };
    specification.other_packages[route.params.other_package_id] = app.compact(form);
    return specification;
  },
})
