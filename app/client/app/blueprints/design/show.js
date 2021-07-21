app.blueprints.design.show = (route) => (a, x) => [
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}`,
    success: blueprint => [
      blueprint.publication ? [
        a.p(app.publicationLabel(blueprint.publication)),
        app.float({
          left: [
            app.button({
              label: app.icon("fas fa-file-export", "Export"),
              onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/export`),
            }),
            app.button({
              label: app.icon("fas fa-project-diagram", "Branch"),
              onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/branch`),
            }),
          ],
          right: [
            app.button({
              label: app.icon("fas fa-minus-square", "Unpublish"),
              onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/unpublish`),
            }),
          ],
        })
      ] :
      app.float({
        left: [
          app.placeholder('Not published'),
        ],
        right: [
          app.button({
            label: app.icon("fas fa-plus-square", "Publish"),
            onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/publish`),
          }),
        ],
      }),

      a.hr,
      a['div.mb-1'](app.blueprints.design.menu(route)),
      route.mount({
        routes: {
          '/icon/?*': app.blueprints.design.icon,
          '/readme/?*': app.blueprints.design.readme,
          '/license/?*': app.blueprints.design.license,
          '/form/?*': app.blueprints.design.form,
          // '/installations/?*': app.blueprints.design.installations,
          // '/publication/?*': app.blueprints.design.publication,
          '*': app.blueprints.design.specification,
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
//         onclick: () => route.open(`/blueprints/${route.params.blueprintIdentifier}/delete`),
//         class: "btn btn-outline-danger",
//       }),
//     ],
//   }),
//   a.hr,
//   app.fetch({
//     url: [
//       `/api/blueprints/@${route.params.blueprintIdentifier}`,
//       // `/api/blueprints/@${route.params.blueprintIdentifier}/icon`,
//       // `/api/blueprints/@${route.params.blueprintIdentifier}/license`,
//       // `/api/blueprints/@${route.params.blueprintIdentifier}/readme`,
//       // `/api/blueprints/@${route.params.blueprintIdentifier}/specification`,
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
//   //   a['div.col-3'](app.blueprints.design.show.menu(route, blueprint)),
//   //   a['div.col-9'](
//     //     route.mount({
//       //       routes: {
//         //         '*': route => app.blueprints.design.show.body(route, blueprint),
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
//                             //       (division) => app.blueprints.design.specification.division(route, specification, division)
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
//                                   //       '/?': app.blueprints.design.show.home,
//                                   //       '/icon/?*': app.blueprints.design.icon,
//                                   //       '/readme/?*': app.blueprints.design.readme,
//                                   //       '/license/?*': app.blueprints.design.license,
//                                   //       '/specification/?*': app.blueprints.design.specification,
//                                   //       // '/about/?*': route => app.blueprints.design.specification.about(route, blueprint),
//                                   //       // '/configuration/?*': route => app.blueprints.design.specification.configuration(route, blueprint),
//                                   //       // '/packages/?*': route => app.blueprints.design.specification.packages(route, blueprint),
//                                   //       // '/repositories/?*': route => app.blueprints.design.specification.repositories(route, blueprint),
//                                   //       // '/system_packages/?*': route => app.blueprints.design.specification.system_packages(route, blueprint),
//                                   //       // '/other_packages/?*': route => app.blueprints.design.specification.other_packages(route, blueprint),
//                                   //       // '/packing/?*': route => app.blueprints.design.specification.packing(route, blueprint),
//                                   //       // '/permissions/?*': route => app.blueprints.design.specification.permissions(route, blueprint),
//                                   //       // '/provider/?*': route => app.blueprints.design.specification.provider(route, blueprint),
//                                   //       // '/modules/?*': route => app.blueprints.design.specification.modules(route, blueprint),
//                                   //       // '/binding_target/?*': route => app.blueprints.design.specification.binding_target(route, blueprint),
//                                   //       // '/bindings/?*': route => app.blueprints.design.specification.bindings(route, blueprint),
//                                   //       // '/images/?*': route => app.blueprints.design.specification.images(route, blueprint),
//                                   //       // '/volumes/?*': route => app.blueprints.design.specification.volumes(route, blueprint),
//                                   //       // '/json/?*': route => blueprint,
//                                   //       // '/:unrecognised': route => a['.error'](`Unrecognised division '${route.params.unrecognised}'`),
//                                   //     },
//                                   //     // transition: ['fade', {duration: 100}],
//                                   //   }),
//                                   //
//                                   // ];
