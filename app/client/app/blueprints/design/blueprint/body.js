app.blueprints.design.blueprint.body = (route, blueprint) => a['div']([
  route.mount({
   routes: {
     '*': route => a.div([
       app.blueprints.design.blueprint.about(route, blueprint),
       app.blueprints.design.blueprint.bindings(route, blueprint),
       app.blueprints.design.blueprint.bindingTarget(route, blueprint),
       // app.blueprints.design.blueprint.configuration(route, blueprint),
       app.blueprints.design.blueprint.compute_service(route, blueprint),
       app.blueprints.design.blueprint.dimensions(route, blueprint),
       app.blueprints.design.blueprint.images(route, blueprint),
       // app.blueprints.design.blueprint.input(route, blueprint),
       app.blueprints.design.blueprint.managedPackages(route, blueprint),
       app.blueprints.design.blueprint.bundledPackages(route, blueprint),
       app.blueprints.design.blueprint.permissions(route, blueprint),
       app.blueprints.design.blueprint.ports(route, blueprint),
       app.blueprints.design.blueprint.provider(route, blueprint),
       // app.blueprints.design.blueprint.repositories(route, blueprint),
       app.blueprints.design.blueprint.resources(route, blueprint),
       // app.blueprints.design.blueprint.serviceTasks(route, blueprint),
       app.blueprints.design.blueprint.systemPackages(route, blueprint),
       app.blueprints.design.blueprint.volumes(route, blueprint),
     ]),
   },
   default: () => '',
 }),
])
