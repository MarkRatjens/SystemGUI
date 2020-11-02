app.blueprints.modules.preview = (router, blueprint) => (a,x) =>
blueprint.modules ?
[
  'Modules',
  a.ul(
    blueprint.modules.map(module => a.li(`${module.type}:${module.name}`))
  ),
] : null
