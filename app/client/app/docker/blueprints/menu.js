app.docker.blueprints.menu = (blueprint) =>
a['app-docker-blueprints-menu']([
  a['div.app-dashboard-item-menu']([
    app.float({
      left: a['div.p-2']((blueprint.about || {}).explanation || ''),
      right: a['div.p-1'](app.docker.blueprints.actions(blueprint)),
    }),
    app.docker.blueprints.readme(blueprint),
    app.docker.blueprints.license(blueprint),
    app.docker.blueprints.relations(blueprint),
    app.docker.blueprints.info(blueprint),
  ]),
])
