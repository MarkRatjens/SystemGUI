app.blueprints.design.blueprint.executions.preview = (route, blueprint) => (a,x) =>
blueprint.executions ? app.navBox(
  route,
  [
    'Executions',
    x.out(blueprint.executions),
  ],
  'executions',
) : null
