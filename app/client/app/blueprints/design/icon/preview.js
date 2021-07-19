app.blueprints.design.icon.preview = (route, blueprint) => (a, x) =>
blueprint.icon ? [
  app.navBox(
    route,
    [
      'Icon ',
      a.img([], {src: `/api/blueprints/@${route.params.blueprintIdentifier}/icon/thumbnail`}),
    ],
    'icon'
  )
] : null
