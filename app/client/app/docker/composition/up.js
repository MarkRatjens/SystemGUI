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
            // Timeout so that not get prior output
            setTimeout(() => {
              el.$('app-docker-composition-up-commit-confirm').$nodes = []
              el.$('app-docker-composition-output').$open('up')
            }, 100)
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
    'app.disconnected': (e) => {
      let el = e.currentTarget
      e.stopPropagation()
      el.$stop()
      el.append(a['div.stream-message.background-error.mt-n2.p-1']('Disconnected'))
    },
    'app.timeout': (e) => {
      let el = e.currentTarget
      e.stopPropagation()
      el.$stop()
      el.append(a['div.stream-message.background-error.mt-n2.p-1']('Timed out'))
    },
  }
})
