app.blueprints.design.blueprint.body = (route, blueprint) => (a,x) => a['div']([
  route.mount({
   routes: {
     '*': route => [
       app.blueprints.design.blueprint.about(route, blueprint),
       app.blueprints.design.blueprint.bindings(route, blueprint),
       app.blueprints.design.blueprint.bindingTarget(route, blueprint),
       app.blueprints.design.blueprint.configuration(route, blueprint),
       app.blueprints.design.blueprint.executions(route, blueprint),
       app.blueprints.design.blueprint.images(route, blueprint),
       app.blueprints.design.blueprint.modules(route, blueprint),
       app.blueprints.design.blueprint.otherPackages(route, blueprint),
       app.blueprints.design.blueprint.permissions(route, blueprint),
       app.blueprints.design.blueprint.ports(route, blueprint),
       app.blueprints.design.blueprint.provider(route, blueprint),
       app.blueprints.design.blueprint.repositories(route, blueprint),
       app.blueprints.design.blueprint.systemPackages(route, blueprint),
       app.blueprints.design.blueprint.volumes(route, blueprint),
       app.blueprints.design.blueprint.service_tasks(route, blueprint),
     ],
   },
   default: () => null,
 })

])
