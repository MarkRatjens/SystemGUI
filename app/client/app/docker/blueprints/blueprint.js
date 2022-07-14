app.docker.blueprints.blueprint = (blueprint) =>
a['app-docker-blueprints-blueprint.app-dashboard-item']([
  a['div.border-bottom']([
    a['div.app-dashboard-item-panel']([
      a['div.app-dashboard-item-heading.container-fluid']([
        a['div.row']([
          a['div.col-md-8.p-2']([
            a.img({
              src: `/api/blueprints/@${blueprint.identifier}/icon/thumbnail`,
              height: '24',
              width: '24'
            }),
            ' ',
            blueprint.identifier,
          ]),
          a['div.col-md.p-2']([
            (blueprint.about || {}).title || ''
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
      app.docker.blueprints.menu(blueprint),
    ]),
    // a['app-docker-blueprints-fetch']({
    //   $fetch: (el) => (path) => {
    //     el.$nodes = app.fetch({
    //       url: `/api/docker/blueprints/@${blueprint}${path}`,
    //       success: () => '',
    //     })
    //   }
    // }),
  ]),
])
