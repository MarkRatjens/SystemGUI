app.docker.compositions.down = (composition) => a['app-docker-compositions-down']({
  $open: (el) => () => {
    el.$nodes = a['div.p-4']([
      app.float({
        left: 'Are you sure?',
        right: app.button({
          label: app.icon('fas fa-arrow-down', 'Confirm down'),
          class: 'btn btn-danger',
          onclick: () => {
            el.$commit()
          }
        }),
      }),
    ])
  },
  $commit: (el) => () => {
    el.$nodes = a['app-docker-compositions-down-commit']([
      a['app-docker-compositions-down-commit-confirm']([
        app.fetch({
          url: `/api/arenas/@${composition.identifier}/down`,
          method: 'POST',
          success: () => {
            el.$('app-docker-compositions-down-commit-confirm').$nodes = []
            el.$('app-docker-compositions-output').$open('down')
            return ''
          },
        }),
      ]),
      app.docker.compositions.output(composition),
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
    'app.disconnected': (e) => {
      let el = e.currentTarget
      e.stopPropagation()
      el.$stop()
      el.append(a['div.app-stream-message.bordered-error.mt-n2.p-1']('Disconnected'))
    },
    'app.timeout': (e) => {
      let el = e.currentTarget
      e.stopPropagation()
      el.$stop()
      el.append(a['div.app-stream-message.bordered-error.mt-n2.p-1']('Timed out'))
    },
  }
})
