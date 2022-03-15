app.docker.image = (image) => a['app-docker-image.app-dashboard-item']({
  id: `docker-image-${image.identifier}`,
  $nodes: (el) => a['div.app-dashboard-item.border-bottom']([
    a['div.app-dashboard-item-panel']([
      a['div.app-dashboard-item-heading.container-fluid']([
        a['div.row']([
          a['div.col-md-8.p-2']([
            a['code'](image.identifier),
            ' ',
            a['.d-inline-block.text-nowrap'](image.tags.map(tag => a.div(tag))),
          ]),
          a['div.col-md.p-2']([
            app.float({
              right: a.small(`${(image.size/1048576).toFixed(2)} MB`),
            }),
          ]),
        ]),
      ], {
        $on: {
          click: (e) => {
            let commandsEl = e.currentTarget.$('^.app-dashboard-item .app-dashboard-item-commands')
            if (commandsEl.classList.contains('active')) {
              commandsEl.classList.remove('active')
            } else {
              commandsEl.classList.add('active')
            }
          },
        }
      }),
      app.float({
        right: app.docker.image.commands(image),
      }),
    ]),
    a['app-docker-image-fetch']({
      $fetch: (el) => (path) => {
        el.$nodes = app.fetch({
          url: `/api/docker/images/@${image.identifier}${path}`,
          success: () => '',
        })
      }
    }),
    app.docker.image.run(image),
    app.docker.image.info(image),
    app.docker.image.delete(image),
  ]),
  $reindex: (el) => (event) => {
    el.$('app-docker-image-state').$reindex(image)
  },
  $receive: (el) => (event) => {
    el.$('app-docker-image-state').$restate(event.payload, event.action)
    if (el.$('button[data-name=log]').classList.contains('active')) {
      if (event.action == 'start') {
        el.$('app-docker-image-log').$restart()
      }
    } else if (el.$('button[data-name=top]').classList.contains('active')) {
      if (event.action == 'stop' || event.action == 'start' || event.action == 'die') {
        el.$('button[data-name=top]').$close()
      }
    }
  },
})
