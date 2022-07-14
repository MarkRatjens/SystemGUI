app.docker.prebuilds.build = (prebuild) =>
a['app-docker-prebuilds-build']({
  $open: (el) => () => {
    el.$nodes = a['div.p-4']([
      app.float({
        left: 'Are you sure?',
        right: app.button({
          label: app.icon('fas fa-hammer', 'Confirm build'),
          class: 'btn btn-primary',
          onclick: () => {
            el.$commit()
          }
        }),
      }),
    ])
  },
  $commit: (el) => () => {
    el.$nodes = a['app-docker-prebuilds-build-commit']([
      a['app-docker-prebuilds-build-commit-confirm']([
        app.fetch({
          url: `/api/packs/@${prebuild}/build`,
          method: 'POST',
          success: () => {
            el.$('app-docker-prebuilds-build-commit-confirm').$nodes = []
            el.$('app-docker-prebuilds-output').$open('build')
            return ''
          },
        }),
      ]),
      app.docker.prebuilds.output(prebuild),
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
