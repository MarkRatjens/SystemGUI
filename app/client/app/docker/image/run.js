app.docker.image.run = (image) => a['app-docker-image-run']({
  $open: (el) => () => {
    el.$nodes = a['div.p-4']([
      app.float({
        left: 'Are you sure?',
        right: [
          app.button({
            label: app.icon('fas fa-running', 'Confirm run'),
            title: 'Confirm run',
            onclick: el.$fetch,
            class: 'btn btn-primary',
          }),
        ]
      })
    ])
  },
  $close: (el) => () => {
    el.$nodes = []
  },
  $fetch: (el) => () => {
    let imageEl = el.$('^app-docker-image')
    el.$nodes = app.fetch({
      url: `/api/docker/images/@${image.identifier}/run`,
      warnings: (warnings) => {
        imageEl.classList.remove('run-fade-out')
        return a['pre.error.m-0.p-1'](warnings.join('\n'))
      },
      placeholder: a['div.p-4'](app.spinner('Creating container')),
      success: (containerId) => a['div.p-4']([
        'Created container ',
        a.code(containerId)
      ]),
    })
  }

})
