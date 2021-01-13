app.space.form = (options={}) => app.form({
  ...options,
  action: (submission) => {
    let object = options.update(submission.form.$value())
    submission.output.$nodes = [
      app.http({
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
    options.form(f),
    options.buttonless ? null : f.buttons({
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
