app.form = (options = {}) => (a, x) =>
  x.form({
    shims: [
      x.form.field.shim,
      x.form.field.extras.shim,
      x.form.field.dependent.shim,
      x.form.field.nest.shim,
      x.form.field.nest.prefab.shim,
      x.bootstrap.form.shim,
      x.form.async.shim,
      app.form.shim,
    ],
    method: 'PUT',
    catch: (error, el) => el.$send("app.disconnected"),
    ...options,
    when: app.fetch.when(options.when),
  });
