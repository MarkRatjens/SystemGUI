app.docker.image.menu = (image) =>
a['app-docker-image-menu']([
  a['div.app-dashboard-item-menu']([
    app.float({
      right: a['div.p-1'](app.docker.image.actions(image)),
    }),
    app.docker.image.create(image),
    app.docker.image.info(image),
    app.docker.image.delete(image),
  ]),
])
