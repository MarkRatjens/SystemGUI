app.docker.images.create = (image) => a['app-docker-images-create']({
  $open: (el) => () => {
    el.$nodes = a['div.p-4']([
      app.float({
        left: 'Are you sure?',
        right: [
          app.button({
            label: app.icon('fas fa-plus-circle', 'Confirm create'),
            title: 'Confirm create',
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
    let imageEl = el.$('^app-docker-images-image')
    el.$nodes = app.fetch({
      url: `/api/docker/images/@${image.identifier}/create_container`,
      method: 'POST',
      warnings: (warnings) => {
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
