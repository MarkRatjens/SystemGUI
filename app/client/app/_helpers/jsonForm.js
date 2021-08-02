app.jsonForm = (options={}) => (a, x) => app.form({
  ...options,
  encode: 'json',
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
