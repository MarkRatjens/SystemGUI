app.blueprints.design.blueprint.input.preview = (route, blueprint) => 
blueprint.input ? app.navBox(
  route,
  [
    'Input',
    x.out(blueprint.input),
  ],
  'input',
) : ''
