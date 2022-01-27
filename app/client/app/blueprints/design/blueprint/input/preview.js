app.blueprints.design.blueprint.input.preview = (route, blueprint) => (a,x) =>
blueprint.input ? app.navBox(
  route,
  [
    'Input',
    x.out(blueprint.input),
  ],
  'input',
) : null
