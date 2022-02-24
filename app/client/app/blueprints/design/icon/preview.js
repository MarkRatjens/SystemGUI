app.blueprints.design.icon.preview = (route, blueprint) => 
blueprint.icon ? [
  app.navBox(
    route,
    [
      'Icon ',
      a.img([], {src: `/api/blueprints/@${route.params.blueprintIdentifier}/icon/thumbnail`}),
    ],
    'icon'
  )
] : ''
