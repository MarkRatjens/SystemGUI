app.docker.image = (image) =>
a['app-docker-image.app-dashboard-item']({
  id: `docker-image-${image.identifier}`,
  $nodes: (el) => a['div.border-bottom']([
    a['div.app-dashboard-item-panel']([
      a['div.app-dashboard-item-heading.container-fluid']([
        a['div.row']([
          a['div.col-md-8.p-2']([
            a['code'](image.identifier),
            ' ',
            a['.d-inline-block.text-nowrap'](image.tags.map(tag => a.div(tag))),
          ]),
          a['div.col-md-2.p-2']([
            a['.d-inline-block.text-nowrap'](
              a.small(new Date(image.created*1000).toLocaleString()),
            ),
          ]),
          a['div.col-md-2.p-2']([
            app.float({
              right: a.small(`${(image.size/1048576).toFixed(2)} MB`),
            }),
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
      app.docker.image.menu(image),
    ]),
    a['app-docker-image-fetch']({
      $fetch: (el) => (path) => {
        el.$nodes = app.fetch({
          url: `/api/docker/images/@${image.identifier}${path}`,
          success: () => '',
        })
      }
    }),
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
