app.docker.containers.log = (container) => a['app-docker-containers-log']({
  $open: (el) => () => {
    el.$nodes = a['div.m-1']([
      app.stream({
        label: `${container.identifier} log`,
        url: `/api/docker/containers/@${container.identifier}/log`,
        complete: (el) => {
          el.append(a['div.app-stream-message.bordered-info.mt-n2.p-1']('Exited'))
        }
      })
    ], {
      $on: {
        'app.disconnected': (e) => {
          let el = e.currentTarget
          e.stopPropagation()
          el.$('^app-docker-containers-log').$stop()
          el.append(a['div.app-stream-message.bordered-error.mt-n2.p-1']('Disconnected'))
        },
        'app.timeout': (e) => {
          let el = e.currentTarget
          e.stopPropagation()
          el.$('^app-docker-containers-log').$stop()
          el.append(a['div.app-stream-message.bordered-error.mt-n2.p-1']('Timed out'))
        },
      }
    })
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
})
