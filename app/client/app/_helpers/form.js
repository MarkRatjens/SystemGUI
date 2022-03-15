app.form = (options = {}) =>
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
    catch: (error, el) => {
      el.$send("app.disconnected")
      return ''
    },
    ...options,
    form: f => [
      options.authenticity == false ? '' : f.input({name: 'authenticity_token', value: authenticityToken, type: 'hidden'}),
      ...options.form(f),
    ],
    when: app.fetch.when(options.when),
    success: app.fetch.success(
      options.success ||
      (() => {
        options.route && options.route.open('..')
        return ''
      })
    ),
  });
