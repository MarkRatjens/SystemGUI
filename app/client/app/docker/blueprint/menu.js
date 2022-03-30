app.docker.blueprint.menu = (blueprint) =>
a['app-docker-blueprint-menu']([
  a['div.app-dashboard-item-menu']([
    app.float({
      left: a['div.p-2']((blueprint.about || {}).explanation || ''),
      right: a['div.p-1'](app.docker.blueprint.actions(blueprint)),
    }),
    app.docker.blueprint.readme(blueprint),
    app.docker.blueprint.license(blueprint),
    app.docker.blueprint.relations(blueprint),
    app.docker.blueprint.info(blueprint),
  ]),
])
