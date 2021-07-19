app.blueprints.design.installations = (route) => (a, x) => [
  a.div("Installations"),
  // blueprint.installations.length ?
  // blueprint.installations.map(
  //   (resolution_identifier) => a.div(app.button({
  //     label: app.icon("fa fa-caret-right", resolution_identifier),
  //     onclick: () => route.open(`/resolutions/${resolution_identifier}`),
  //   }))
  // ) :
  // app.placeholder('None'),
  // app.fetch({
  //   url: `/api/blueprints/@${route.params.blueprintIdentifier}/specification`,
  //   placeholder: app.spinner('Loading blueprint specification'),
  //   success: (specification, el) => [
  //     a['div.row']([
  //       a['div.col-3']([
  //         app.blueprints.design.specification.menu(route, specification),
  //       ]),
  //       a['div.col-9']([
  //         app.blueprints.design.specification.body(route, specification),
  //       ]),
  //     ]),
  //   ],
  // }),
]


// app.fetch({
//   url: `/api/blueprints/@${route.params.blueprintIdentifier}/specification`,
//   placeholder: app.spinner('Loading blueprint'),
//   success: (blueprint, el) => {
//     el.$nodes = a({
//       $tag: 'app-blueprint',
//       $state: blueprint,
//       $nodes: (el, blueprint) => [
//         a.h2('Specification'),
//         a.hr,
//         route.mount({
//           routes: {
//             '/?': route => app.blueprints.design.specification.home(route, blueprint),
//             '/about/?*': route => app.blueprints.design.about(route, blueprint),
//             '/licenses/?*': route => app.blueprints.design.licenses(route, blueprint),
//             '/configuration/?*': route => app.blueprints.design.configuration(route, blueprint),
//             '/packages/?*': route => app.blueprints.design.packages(route, blueprint),
//             '/repositories/?*': route => app.blueprints.design.repositories(route, blueprint),
//             '/system_packages/?*': route => app.blueprints.design.system_packages(route, blueprint),
//             '/other_packages/?*': route => app.blueprints.design.other_packages(route, blueprint),
//             '/packing/?*': route => app.blueprints.design.packing(route, blueprint),
//             '/permissions/?*': route => app.blueprints.design.permissions(route, blueprint),
//             '/provider/?*': route => app.blueprints.design.provider(route, blueprint),
//             '/modules/?*': route => app.blueprints.design.modules(route, blueprint),
//             '/binding_target/?*': route => app.blueprints.design.binding_target(route, blueprint),
//             '/bindings/?*': route => app.blueprints.design.bindings(route, blueprint),
//             '/images/?*': route => app.blueprints.design.images(route, blueprint),
//             '/volumes/?*': route => app.blueprints.design.volumes(route, blueprint),
//             // '/json/?*': route => blueprint,
//             '/:unrecognised': route => a['.error'](`Unrecognised division '${route.params.unrecognised}'`),
//           },
//           // transition: ['fade', {duration: 100}],
//         }),
//         // route.mount({
//         //   routes: {
//         //     '/installation/?*': app.blueprints.design.edit.installation,
//         //     '/readme/?*': app.blueprints.design.edit.readme,
//         //     '/license/?*': app.blueprints.design.edit.license,
//         //     '/icon/?*': app.blueprints.design.edit.icon,
//         //     // '/software/?*': app.blueprints.design.edit.software,
//         //     '*': app.blueprints.design.edit.software,
//         //   }
//         // }),

//       ],
//     })
//   },
// });
