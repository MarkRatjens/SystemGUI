app.admin.blueprints.about.preview = (router, blueprint) => (a,x) =>
blueprint.about ? a.div([
  blueprint.about.title ? a.h1([
    a.img(a._, {src: `/api/blueprints/${router.params.blueprintIdentifier}/icon`}),
    ' ',
    blueprint.about.title,
  ]) : a['_'],
  blueprint.about.explanation ? a.p(blueprint.about.explanation) : a['_'],
]) : a['_']
