app.admin.blueprints.specification.body = (route, specification) => (a,x) => [
  route.mount({
   routes: {
     '*': route => [
       app.admin.blueprints.specification.about(route, specification),
       app.admin.blueprints.specification.bindings(route, specification),
       app.admin.blueprints.specification.bindingTarget(route, specification),
       app.admin.blueprints.specification.configuration(route, specification),
       app.admin.blueprints.specification.images(route, specification),
       app.admin.blueprints.specification.modules(route, specification),
       app.admin.blueprints.specification.otherPackages(route, specification),
       app.admin.blueprints.specification.permissions(route, specification),
       app.admin.blueprints.specification.provider(route, specification),
       app.admin.blueprints.specification.repositories(route, specification),
       app.admin.blueprints.specification.systemPackages(route, specification),
       app.admin.blueprints.specification.volumes(route, specification),
     ],
     // '/?': route => app.admin.blueprints.specification.home(route, specification),
     // '/about/?*': route => app.admin.blueprints.about(route, specification),
     // '/bindings/?*': route => app.admin.blueprints.bindings(route, specification),
     // '/binding_target/?*': route => app.admin.blueprints.binding_target(route, specification),
     // '/configuration/?*': route => app.admin.blueprints.configuration(route, specification),
     // '/images/?*': route => app.admin.blueprints.images(route, specification),
     // '/modules/?*': route => app.admin.blueprints.modules(route, specification),
     // '/other_packages/?*': route => app.admin.blueprints.other_packages(route, specification),
     // '/permissions/?*': route => app.admin.blueprints.permissions(route, specification),
     // '/provider/?*': route => app.admin.blueprints.provider(route, specification),
     // '/repositories/?*': route => app.admin.blueprints.repositories(route, specification),
     // '/system_packages/?*': route => app.admin.blueprints.system_packages(route, specification),
     // '/volumes/?*': route => app.admin.blueprints.volumes(route, specification),
   },
   // transition: ['fade', {duration: 100}],
   default: () => null,
 })

]
