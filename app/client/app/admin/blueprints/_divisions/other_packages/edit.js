app.admin.blueprints.other_packages.edit = (router, blueprint) =>
app.admin.blueprints.form({
  router: router,
  object: blueprint.other_packages[router.params.other_package_id],
  form: app.admin.blueprints.other_packages.form,

  update: (form) => {
    // debugger
    // if (form.other_packages.length) {
    //   blueprint.other_packages = form.other_packages
    // } else {
    //   delete blueprint.other_packages
    // };
    blueprint.other_packages[router.params.other_package_id] = app.compact(form);
    return blueprint;
  },
})
