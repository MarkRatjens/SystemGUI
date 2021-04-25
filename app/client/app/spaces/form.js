app.spaces.form = (options={}) => (a, x) => app.form({
  ...options,
  action: (submission) => {
    let object = options.update(submission.form.$value())
    submission.output.$nodes = [
      app.fetch({
        url: options.url,
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(object),
        complete: (el) => {
          submission.complete(el)
          el.$send('update')
        },
        success: () => options.router.open(options.close || '..'),
      })
    ]
  },
  form: f => [
    a.div(options.form(f)),
    options.buttonless ? a._ : f.buttons({
      cancel: {
        onclick: () => options.router.open(options.close || '..'),
        ...options.cancel
      },
      submit: {
        ...options.submit
      }
    }),
  ],
})
