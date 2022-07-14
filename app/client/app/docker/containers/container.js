app.docker.containers.container = (container) =>
a['app-docker-containers-container.app-dashboard-item']({
  id: `app-docker-containers-container-${container.identifier}`,
  $nodes: (el) => a['div.border-bottom']([
    a['div.app-dashboard-item-panel']([
      a['div.app-dashboard-item-heading.container-fluid']([
        a['div.row']([
          a['div.col-md-8.p-2']([
            a['code'](container.identifier),
            ' ',
            a['.text-nowrap'](container.name),
          ]),
          a['div.col-md-2.p-2']([
            a['.d-inline-block.text-nowrap'](
              a.small(new Date(container.created*1000).toLocaleString()),
            ),
          ]),
          a['div.col-md-2.p-2']([
            app.docker.containers.state(container),
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
      app.docker.containers.menu(container),
    ]),
    a['app-docker-containers-fetch']({
      $fetch: (el) => (instruction) => {
        el.$nodes = app.fetch({
          url: `/api/docker/containers/@${container.identifier}/instruct/${instruction}`,
          success: () => '',
        })
      }
    }),
  ]),
  $reindex: (el) => (event) => {
    el.$('app-docker-containers-state').$reindex(container)
  },
  $receive: (el) => (event) => {
    el.$('app-docker-containers-state').$restate(event.payload, event.action)
    if (el.$('button[data-name=log]').classList.contains('active')) {
      if (event.action == 'start') {
        el.$('app-docker-containers-log').$restart()
      }
    } else if (el.$('button[data-name=top]').classList.contains('active')) {
      if (event.action == 'stop' || event.action == 'start' || event.action == 'die') {
        el.$('button[data-name=top]').$close()
      }
    }
  },
})
