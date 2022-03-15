app.docker.container.log = (container) => a['app-docker-container-log']({
  $open: (el) => () => {
    el.$nodes = a['div.p-1']([
      app.stream({
        label: `${container.identifier} log`,
        url: `/api/docker/containers/@${container.identifier}/log`,
        complete: (el) => {
          el.append(a['pre.info.p-1.m-0']('Exited'))
        }
      })
    ])
  },
  $restart: (el) => () => {
    el.$open()
  },
  $stop: (el) => () => {
    el.$('app-stream').$stop()
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
