app.docker.composition.up = (composition) => a['app-docker-composition-up']({
  $open: (el) => () => {
    el.$nodes = a['div.p-4']([
      app.float({
        left: 'Are you sure?',
        right: app.button({
          label: app.icon('fas fa-arrow-up', 'Confirm up'),
          class: 'btn btn-primary',
          onclick: () => {
            el.$commit()
          }
        }),
      }),
    ])
  },
  $commit: (el) => () => {
    el.$nodes = a['app-docker-composition-up-commit']([
      a['app-docker-composition-up-commit-confirm']([
        app.fetch({
          url: `/api/arenas/@${composition.identifier}/apply`,
          method: 'POST',
          success: () => {
            el.$('app-docker-composition-up-commit-confirm').$nodes = []
            el.$('app-docker-composition-output').$open('up')
            return ''
          },
        }),
      ]),
      app.docker.composition.output(composition),
    ])
  },
  $restart: (el) => () => {
    el.$open()
  },
  $stop: (el) => () => {
    let streamEl = el.$('app-stream')
    if (streamEl) streamEl.$stop()
  },
  $close: (el) => () => {
    el.$stop()
    el.$nodes = []
  },
  $on: {
    'app.disconnected': (e, el) => {
      e.stopPropagation()
      el.$stop()
      el.append(a['pre.error.p-1']('Disconnected'))
    },
    'app.timeout': (e, el) => {
      e.stopPropagation()
      el.$stop()
      el.append(a['pre.error.p-1']('Timed out'))
    },
  }
})
