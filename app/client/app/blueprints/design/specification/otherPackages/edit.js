app.blueprints.design.specification.otherPackages.edit = (route, specification) =>
app.blueprints.design.specification.form({
  route: route,
  object: specification.other_packages[route.params.other_package_id],
  form: app.blueprints.design.specification.otherPackages.form,

  update: (form) => {
    // debugger
    // if (form.other_packages.length) {
    //   specification.other_packages = form.other_packages
    // } else {
    //   delete specification.other_packages
    // };
    specification.other_packages[route.params.other_package_id] = app.compact(form);
    return {specification: specification};
  },
})
