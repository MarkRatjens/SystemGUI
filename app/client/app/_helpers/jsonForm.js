app.jsonForm = (options={}) => (a, x) => app.form({
  ...options,
  encode: 'json',
  success: app.fetch.success(options.success || (() => options.route.open('..'))),
  form: f => [
    a.div(options.form(f)),
    options.buttonless ? null : f.buttons({
      cancel: {
        onclick: () => options.route.open(options.close || '..'),
        ...options.cancel
      },
      submit: {
        ...options.submit
      }
    }),
  ],
})
