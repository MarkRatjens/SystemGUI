app.division.form = (options={}) => app.form({
  ...options,
  action: (submission) => {
    let object = options.update(submission.form.$value())
    submission.output.$nodes = [
      app.http({
        url: options.url,
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(object),
        complete: submission.complete,
        success: () => options.router.open('..'),
      })
    ]
  },
  form: f => [
    options.form(f),
    f.buttons({
      cancel: {
        onclick: () => options.router.open('..'),
        ...options.cancel
      },
      submit: {
        ...options.submit
      }
    }),
  ],
})
