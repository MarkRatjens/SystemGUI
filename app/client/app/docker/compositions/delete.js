app.docker.compositions.delete = (composition) => a['app-docker-compositions-delete']({
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
    el.$nodes = app.fetch({
      url: `/api/arenas/@${composition.identifier}`,
      method: 'DELETE',
      success: () => {
        let compositionEl = el.$('^app-docker-compositions-composition')
        x.lib.animate.fade.out(
          compositionEl,
          {
            complete: () => {
              compositionEl.$nodes = []
              compositionEl.remove()
            }
          }
        )
      },
    })
  }

})
