app.jsonForm = (options={}) => app.jsonForm({
  ...options,
  success: (...args) => {
    let success =
    options.success ||
    (() => options.route.open(options.close || '..'))

    return success(...args) || ''
  },
  encode: 'json',
  authenticity: false,
  digest: (form) => ({
    ...options.authenticity == false ? {} : {authenticity_token: authenticityToken},
    ...options.digest ? options.digest(form) : form,
  }),
  form: f => [
    ...(options.form ? options.form(f) : []),
    options.buttonless ? '' : f.buttons({
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
