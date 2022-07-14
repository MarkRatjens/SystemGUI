app.docker.containers.menu = (container) =>
a['app-docker-containers-menu']([
  a['div.app-dashboard-item-menu']([
    app.float({
      left: a['div.p-2.m-1'](a.a(
        app.icon('fas fa-external-link-alt'),
        {target: '_blank', href: 'http://container.web.address'}
      )),
      right: a['div.p-1']([
        app.docker.containers.instructions(),
        ' ',
        app.docker.containers.actions(container),
      ]),
    }),
    app.docker.containers.info(container),
    app.docker.containers.top(container),
    app.docker.containers.log(container),
    app.docker.containers.delete(container),
  ]),
])
