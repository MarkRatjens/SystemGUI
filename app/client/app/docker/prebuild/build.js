app.docker.prebuild.build = (prebuild) => a['app-docker-prebuild-build']({
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
    el.$nodes = a['app-docker-prebuild-build-commit']([
      a['app-docker-prebuild-build-commit-confirm']([
        app.fetch({
          url: `/api/packs/@${prebuild}/build`,
          method: 'POST',
          success: () => {
            el.$('app-docker-prebuild-build-commit-confirm').$nodes = []
            el.$('app-docker-prebuild-output').$open('build')
            return ''
          },
        }),
      ]),
      app.docker.prebuild.output(prebuild),
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
