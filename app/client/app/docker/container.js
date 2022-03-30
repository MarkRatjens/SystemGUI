app.docker.container = (container) =>
a['app-docker-container.app-dashboard-item']({
  id: `docker-container-${container.identifier}`,
  $nodes: (el) => a['div.border-bottom']([
    a['div.app-dashboard-item-panel']([
      a['div.app-dashboard-item-heading.container-fluid']([
        a['div.row']([
          a['div.col-md-8.p-2']([
            a['code'](container.identifier),
            ' ',
            a['.text-nowrap'](container.name),
          ]),
          a['div.col-md.p-2']([
            app.docker.container.state(container),
          ]),
        ]),
      ], {
        $on: {
          click: (e) => {
            let menuEl = e.currentTarget.$('^.app-dashboard-item .app-dashboard-item-menu')
            if (menuEl.classList.contains('active')) {
              menuEl.classList.remove('active')
            } else {
              menuEl.classList.add('active')
              menuEl.scrollIntoView({block: "center", behavior: 'smooth'});
            }
          },
        }
      }),
      app.docker.container.menu(container),
    ]),
    a['app-docker-container-fetch']({
      $fetch: (el) => (path) => {
        el.$nodes = app.fetch({
          url: `/api/docker/containers/@${container.identifier}${path}`,
          success: () => '',
        })
      }
    }),
  ]),
  $reindex: (el) => (event) => {
    el.$('app-docker-container-state').$reindex(container)
  },
  $receive: (el) => (event) => {
    el.$('app-docker-container-state').$restate(event.payload, event.action)
    if (el.$('button[data-name=log]').classList.contains('active')) {
      if (event.action == 'start') {
        el.$('app-docker-container-log').$restart()
      }
    } else if (el.$('button[data-name=top]').classList.contains('active')) {
      if (event.action == 'stop' || event.action == 'start' || event.action == 'die') {
        el.$('button[data-name=top]').$close()
      }
    }
  },
})
