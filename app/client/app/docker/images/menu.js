app.docker.images.menu = (image) =>
a['app-docker-images-menu']([
  a['div.app-dashboard-item-menu']([
    app.float({
      right: a['div.p-1'](app.docker.images.actions(image)),
    }),
    app.docker.images.create(image),
    app.docker.images.info(image),
    app.docker.images.delete(image),
  ]),
])
