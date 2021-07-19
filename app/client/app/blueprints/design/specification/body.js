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
     // '/?': route => app.blueprints.design.specification.home(route, specification),
     // '/about/?*': route => app.blueprints.design.about(route, specification),
     // '/bindings/?*': route => app.blueprints.design.bindings(route, specification),
     // '/binding_target/?*': route => app.blueprints.design.binding_target(route, specification),
     // '/configuration/?*': route => app.blueprints.design.configuration(route, specification),
     // '/images/?*': route => app.blueprints.design.images(route, specification),
     // '/modules/?*': route => app.blueprints.design.modules(route, specification),
     // '/other_packages/?*': route => app.blueprints.design.other_packages(route, specification),
     // '/permissions/?*': route => app.blueprints.design.permissions(route, specification),
     // '/provider/?*': route => app.blueprints.design.provider(route, specification),
     // '/repositories/?*': route => app.blueprints.design.repositories(route, specification),
     // '/system_packages/?*': route => app.blueprints.design.system_packages(route, specification),
     // '/volumes/?*': route => app.blueprints.design.volumes(route, specification),
   },
   // transition: ['fade', {duration: 100}],
   default: () => null,
 })

])
