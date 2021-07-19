app.admin.blueprints.show = (route) => (a, x) => [
  app.fetch({
    url: `/api/blueprints/${route.params.blueprintIdentifier}`,
    success: blueprint => [
      app.float({
        left: [
          blueprint.publication ?
          app.publicationLabel(blueprint.publication) :
          app.placeholder('Not published'),
        ],
        right: [
          app.button({
            label: app.icon("fas fa-file-export", "Export"),
            onclick: () => route.open(`/admin/blueprints/${route.params.blueprintIdentifier}/export`),
          }),
        ],
      }),

      a.hr,
      app.admin.blueprints.show.menu(route),
      a.hr,
      route.mount({
        routes: {
          '/icon/?*': app.admin.blueprints.icon,
          '/readme/?*': app.admin.blueprints.readme,
          '/license/?*': app.admin.blueprints.license,
          '/installations/?*': app.admin.blueprints.installations,
          '/publication/?*': app.admin.blueprints.publication,
          '*': app.admin.blueprints.specification,
        }
      }),

    ]
  }),

]


// [
//
//   app.float({
//     right: [
//       app.button({
//         label: app.icon("fa fa-trash", "Delete blueprint"),
//         onclick: () => route.open(`/admin/blueprints/${route.params.blueprintIdentifier}/delete`),
//         class: "btn btn-outline-danger",
//       }),
//     ],
//   }),
//   a.hr,
//   app.fetch({
//     url: [
//       `/api/blueprints/${route.params.blueprintIdentifier}`,
//       // `/api/blueprints/${route.params.blueprintIdentifier}/icon`,
//       // `/api/blueprints/${route.params.blueprintIdentifier}/license`,
//       // `/api/blueprints/${route.params.blueprintIdentifier}/readme`,
//       // `/api/blueprints/${route.params.blueprintIdentifier}/specification`,
//     ],
//     placeholder: app.spinner('Loading blueprint'),
//     success: ([
//       blueprint,
//       // icon,
//       // license,
//       // readme,
//       // specification
//     ], el) => ,
//   }),
// ]
//
//
//
// // a['div.row']([
//   //   a['div.col-3'](app.admin.blueprints.show.menu(route, blueprint)),
//   //   a['div.col-9'](
//     //     route.mount({
//       //       routes: {
//         //         '*': route => app.admin.blueprints.show.body(route, blueprint),
//         //       },
//         //       lazy: false,
//         //       default: () => null,
//         //     })
//         //   ),
//         // ]),
//
//
//
//         //
//         //   let divisions = {
//           //     readme: 'Readme',
//           //     license: 'License',
//           //     icon: 'Icon',
//           //     about: 'About',
//           //     configuration: 'Configuration',
//           //     bindings: 'Bindings',
//           //     binding_target: 'Binding target',
//           //     provider: 'Provider',
//           //     scaling: 'Scaling',
//           //     system_packages: 'System packages',
//           //     other_packages: 'Other packages',
//           //     modules: 'Modules',
//           //     repositories: 'Repositories',
//           //     permissions: 'Permissions',
//           //     volumes: 'Volumes',
//           //     images: 'Images',
//           //     // 'containers': 'Containers',
//           //     service_tasks: 'Service tasks',
//           //   }
//           //
//           //   let availableDivisions = Object.keys(divisions)
//           //   let specificationDivisions = Object.keys(specification)
//           //
//           //   let validBlueprintDivisions = availableDivisions
//           //   .filter((division) => specificationDivisions.includes(division))
//           //   let invalidBlueprintDivisions = specificationDivisions
//           //   .filter((division) => !availableDivisions.includes(division))
//           //   let addableDivisions = availableDivisions
//           //   .filter((division) => !validBlueprintDivisions.includes(division))
//           //
//           //   return a.div([
//             //
//             //     a.p([
//               //       app.form({
//                 //         form: f => [
//                   //           f.select({
//                     //             selections: addableDivisions.map((division) => [division, divisions[division]]),
//                     //             placeholder: '+ Add',
//                     //             selectTag: {
//                       //               $on: {
//                         //                 'input': (e, el) => route.open(`${el.value}`)
//                         //               },
//                         //             }
//                         //           })
//                         //         ]
//                         //       })
//                         //     ]),
//                         //
//                         //     a.div([
//                           //       'about',
//                           //       // 'title',
//                           //       // 'description',
//                           //       // 'licenses',
//                           //       'configuration',
//                           //       'binding_target',
//                           //       'bindings',
//                           //       'system_packages',
//                           //       'other_packages',
//                           //       // 'packing',
//                           //       'permissions',
//                           //       'provider',
//                           //       'modules',
//                           //       'images',
//                           //       // 'containers',
//                           //       'volumes',
//                           //     ].map(
//                             //       (division) => app.admin.blueprints.specification.division(route, specification, division)
//                             //     )),
//                             //
//                             //   ])
//                             //
//                             // }
//
//
//                             // [
//                               //
//                               //   route.mount({
//                                 //     routes: {
//                                   //       '/?': app.admin.blueprints.show.home,
//                                   //       '/icon/?*': app.admin.blueprints.icon,
//                                   //       '/readme/?*': app.admin.blueprints.readme,
//                                   //       '/license/?*': app.admin.blueprints.license,
//                                   //       '/specification/?*': app.admin.blueprints.specification,
//                                   //       // '/about/?*': route => app.admin.blueprints.specification.about(route, blueprint),
//                                   //       // '/configuration/?*': route => app.admin.blueprints.specification.configuration(route, blueprint),
//                                   //       // '/packages/?*': route => app.admin.blueprints.specification.packages(route, blueprint),
//                                   //       // '/repositories/?*': route => app.admin.blueprints.specification.repositories(route, blueprint),
//                                   //       // '/system_packages/?*': route => app.admin.blueprints.specification.system_packages(route, blueprint),
//                                   //       // '/other_packages/?*': route => app.admin.blueprints.specification.other_packages(route, blueprint),
//                                   //       // '/packing/?*': route => app.admin.blueprints.specification.packing(route, blueprint),
//                                   //       // '/permissions/?*': route => app.admin.blueprints.specification.permissions(route, blueprint),
//                                   //       // '/provider/?*': route => app.admin.blueprints.specification.provider(route, blueprint),
//                                   //       // '/modules/?*': route => app.admin.blueprints.specification.modules(route, blueprint),
//                                   //       // '/binding_target/?*': route => app.admin.blueprints.specification.binding_target(route, blueprint),
//                                   //       // '/bindings/?*': route => app.admin.blueprints.specification.bindings(route, blueprint),
//                                   //       // '/images/?*': route => app.admin.blueprints.specification.images(route, blueprint),
//                                   //       // '/volumes/?*': route => app.admin.blueprints.specification.volumes(route, blueprint),
//                                   //       // '/json/?*': route => blueprint,
//                                   //       // '/:unrecognised': route => a['.error'](`Unrecognised division '${route.params.unrecognised}'`),
//                                   //     },
//                                   //     // transition: ['fade', {duration: 100}],
//                                   //   }),
//                                   //
//                                   // ];
