app.docker.container.menu = (container) =>
a['app-docker-container-menu']([
  a['div.app-dashboard-item-menu']([
    app.float({
      left: a['div.p-2.m-1'](a.a(
        app.icon('fas fa-external-link-alt'),
        {target: '_blank', href: 'http://container.web.address'}
      )),
      right: a['div.p-1']([
        app.docker.container.instructions(),
        ' ',
        app.docker.container.actions(container),
      ]),
    }),
    app.docker.container.info(container),
    app.docker.container.top(container),
    app.docker.container.log(container),
    app.docker.container.delete(container),
  ]),
])
