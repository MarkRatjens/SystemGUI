app.blueprints.design.blueprint.serviceTasks.preview = (route, blueprint) => (a,x) =>
blueprint.service_tasks ? app.navBox(
  route,
  [
    'Service tasks',
    x.out(blueprint.service_tasks),
  ],
  'service_tasks',
) : null
