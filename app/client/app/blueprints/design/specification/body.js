app.blueprints.design.specification.body = (route, specification) => (a,x) => a['div']([
  route.mount({
   routes: {
     '*': route => [
       app.blueprints.design.specification.about(route, specification),
       app.blueprints.design.specification.bindings(route, specification),
       app.blueprints.design.specification.bindingTarget(route, specification),
       app.blueprints.design.specification.configuration(route, specification),
       app.blueprints.design.specification.images(route, specification),
       app.blueprints.design.specification.modules(route, specification),
       app.blueprints.design.specification.otherPackages(route, specification),
       app.blueprints.design.specification.permissions(route, specification),
       app.blueprints.design.specification.provider(route, specification),
       app.blueprints.design.specification.repositories(route, specification),
       app.blueprints.design.specification.systemPackages(route, specification),
       app.blueprints.design.specification.volumes(route, specification),
     ],
   },
   default: () => null,
 })

])
