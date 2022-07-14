app.docker.containers.delete = (container) => a['app-docker-containers-delete']({
  $open: (el) => () => {
    el.$nodes = a['div.p-4']([
      app.float({
        left: 'Are you sure?',
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
    let containerEl = el.$('^app-docker-containers-container')
    containerEl.classList.add('delete-fade-out')
    el.$nodes = app.fetch({
      url: `/api/docker/containers/@${container.identifier}`,
      method: 'DELETE',
      warnings: (warnings) => {
        containerEl.classList.remove('delete-fade-out')
        return a['pre.error.m-0.p-1'](warnings.join('\n'))
      },
      success: () => {
        x.lib.animate.fade.out(
          containerEl,
          {
            complete: () => {
              containerEl.$nodes = []
              containerEl.remove()
            }
          }
        )
        return ''
      },
    })
  }

})
