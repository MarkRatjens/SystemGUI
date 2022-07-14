app.docker.images.delete = (image) => a['app-docker-images-delete']({
  $open: (el) => () => {
    el.$nodes = a['div.p-4']([
      app.float({
        left: [
          'Are you sure?',
        ],
        right: [
          app.button({
            label: app.icon('fas fa-trash', 'Confirm delete'),
            title: 'Confirm delete',
            onclick: el.$fetch,
            class: 'btn btn-danger',
          }),
        ]
      })
    ])
  },
  $close: (el) => () => {
    el.$nodes = []
  },
  $fetch: (el) => () => {
    // Add 'delete-fade-out' class early
    // Delete event comes through event stream before fetch returns
    let imageEl = el.$('^app-docker-images-image')
    imageEl.classList.add('delete-fade-out')
    el.$nodes = app.fetch({
      url: `/api/docker/images/@${image.identifier}`,
      method: 'DELETE',
      warnings: (warnings) => {
        imageEl.classList.remove('delete-fade-out')
        return a['pre.error.m-0.p-1'](warnings.join('\n'))
      },
      success: () => {
        x.lib.animate.fade.out(
          imageEl,
          {
            complete: () => {
              imageEl.$nodes = []
              imageEl.remove()
            }
          }
        )
        return ''
      },
    })
  }
})
