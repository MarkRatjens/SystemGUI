app.admin.blueprints.installations = (route) => (a, x) => [
  a.div("Installations"),
  // blueprint.installations.length ?
  // blueprint.installations.map(
  //   (resolution_identifier) => a.div(app.button({
  //     label: app.icon("fa fa-caret-right", resolution_identifier),
  //     onclick: () => route.open(`/admin/resolutions/${resolution_identifier}`),
  //   }))
  // ) :
  // app.placeholder('None'),
  // app.fetch({
  //   url: `/api/blueprints/${route.params.blueprintIdentifier}/specification`,
  //   placeholder: app.spinner('Loading blueprint specification'),
  //   success: (specification, el) => [
  //     a['div.row']([
  //       a['div.col-3']([
  //         app.admin.blueprints.specification.menu(route, specification),
  //       ]),
  //       a['div.col-9']([
  //         app.admin.blueprints.specification.body(route, specification),
  //       ]),
  //     ]),
  //   ],
  // }),
]


// app.fetch({
//   url: `/api/blueprints/${route.params.blueprintIdentifier}/specification`,
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
//             '/?': route => app.admin.blueprints.specification.home(route, blueprint),
//             '/about/?*': route => app.admin.blueprints.about(route, blueprint),
//             '/licenses/?*': route => app.admin.blueprints.licenses(route, blueprint),
//             '/configuration/?*': route => app.admin.blueprints.configuration(route, blueprint),
//             '/packages/?*': route => app.admin.blueprints.packages(route, blueprint),
//             '/repositories/?*': route => app.admin.blueprints.repositories(route, blueprint),
//             '/system_packages/?*': route => app.admin.blueprints.system_packages(route, blueprint),
//             '/other_packages/?*': route => app.admin.blueprints.other_packages(route, blueprint),
//             '/packing/?*': route => app.admin.blueprints.packing(route, blueprint),
//             '/permissions/?*': route => app.admin.blueprints.permissions(route, blueprint),
//             '/provider/?*': route => app.admin.blueprints.provider(route, blueprint),
//             '/modules/?*': route => app.admin.blueprints.modules(route, blueprint),
//             '/binding_target/?*': route => app.admin.blueprints.binding_target(route, blueprint),
//             '/bindings/?*': route => app.admin.blueprints.bindings(route, blueprint),
//             '/images/?*': route => app.admin.blueprints.images(route, blueprint),
//             '/volumes/?*': route => app.admin.blueprints.volumes(route, blueprint),
//             // '/json/?*': route => blueprint,
//             '/:unrecognised': route => a['.error'](`Unrecognised division '${route.params.unrecognised}'`),
//           },
//           // transition: ['fade', {duration: 100}],
//         }),
//         // route.mount({
//         //   routes: {
//         //     '/installation/?*': app.admin.blueprints.edit.installation,
//         //     '/readme/?*': app.admin.blueprints.edit.readme,
//         //     '/license/?*': app.admin.blueprints.edit.license,
//         //     '/icon/?*': app.admin.blueprints.edit.icon,
//         //     // '/software/?*': app.admin.blueprints.edit.software,
//         //     '*': app.admin.blueprints.edit.software,
//         //   }
//         // }),

//       ],
//     })
//   },
// });
