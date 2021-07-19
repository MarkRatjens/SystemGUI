// app.admin.blueprints.show.home = (route) => (a,x) => [
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
//
//   app.fetch({
//     url: [
//       `/api/blueprints/${route.params.blueprintIdentifier}`,
//       `/api/blueprints/${route.params.blueprintIdentifier}/icon`,
//       `/api/blueprints/${route.params.blueprintIdentifier}/license`,
//       `/api/blueprints/${route.params.blueprintIdentifier}/readme`,
//       `/api/blueprints/${route.params.blueprintIdentifier}/specification`,
//     ],
//     placeholder: app.spinner('Loading blueprint'),
//     success: ([blueprint, icon, license, readme, specification], el) => [
//
//       app.float({
//         left: [
//           app.button({
//             label: app.icon("fas fa-sync", "Synchronize"),
//             onclick: () => route.open("sync"),
//           }),
//         ],
//         right: [
//           blueprint.publication ? app.button({
//             label: app.icon("fas fa-book", "Publication"),
//             onclick: () => route.open(`/admin/publications/${route.params.blueprintIdentifier}`),
//           }) : a.div('No publication'),
//         ],
//       }),
//       a.hr,
//       a.div("Installations"),
//       blueprint.installations.length ?
//       blueprint.installations.map(
//         (resolution_identifier) => a.div(app.button({
//           label: app.icon("fa fa-caret-right", resolution_identifier),
//           onclick: () => route.open(`/admin/resolutions/${resolution_identifier}`),
//         }))
//       ) :
//       app.placeholder('None'),
//       a.hr,
//
//       // a['div.row']([
//         //   a['div.col-3'](app.admin.blueprints.show.menu(route, blueprint)),
//         //   a['div.col-9'](
//           //     route.mount({
//             //       routes: {
//               //         '*': route => app.admin.blueprints.show.body(route, blueprint),
//               //       },
//               //       lazy: false,
//               //       default: () => null,
//               //     })
//               //   ),
//               // ]),
//
//
//
//               a.hr,
//               a.hr,
//               a.hr,
//               a.hr,
//               a.hr,
//               app.button({
//                 label: app.icon("fas fa-clipboard-list", "Specification"),
//                 onclick: () => route.open(`specification`),
//               }),
//               app.button({
//                 label: app.icon("fas fa-icons", "Icon"),
//                 onclick: () => route.open('icon'),
//               }),
//               a.hr,
//               app.tabs({
//                 tabs: [
//                   ['Readme', blueprint.readme],
//                   ['Specification', blueprint.specification],
//                 ]
//               }),
//
//               a.br,
//
//               app.collapse({
//                 label: 'Specification',
//                 body: [
//                   a.br,
//                   app.button({
//                     label: app.icon("fas fa-edit", "Edit"),
//                     onclick: () => route.open(`edit`),
//                   }),
//                   a.hr,
//                   x.out(blueprint.specification),
//                 ],
//               }),
//               a.hr,
//               x.out(blueprint),
//
//             ],
//           }),
//
//
//
//
//           //
//           //   let divisions = {
//             //     readme: 'Readme',
//             //     license: 'License',
//             //     icon: 'Icon',
//             //     about: 'About',
//             //     configuration: 'Configuration',
//             //     bindings: 'Bindings',
//             //     binding_target: 'Binding target',
//             //     provider: 'Provider',
//             //     scaling: 'Scaling',
//             //     system_packages: 'System packages',
//             //     other_packages: 'Other packages',
//             //     modules: 'Modules',
//             //     repositories: 'Repositories',
//             //     permissions: 'Permissions',
//             //     volumes: 'Volumes',
//             //     images: 'Images',
//             //     // 'containers': 'Containers',
//             //     service_tasks: 'Service tasks',
//             //   }
//             //
//             //   let availableDivisions = Object.keys(divisions)
//             //   let specificationDivisions = Object.keys(specification)
//             //
//             //   let validBlueprintDivisions = availableDivisions
//             //   .filter((division) => specificationDivisions.includes(division))
//             //   let invalidBlueprintDivisions = specificationDivisions
//             //   .filter((division) => !availableDivisions.includes(division))
//             //   let addableDivisions = availableDivisions
//             //   .filter((division) => !validBlueprintDivisions.includes(division))
//             //
//             //   return a.div([
//               //
//               //     a.p([
//                 //       app.form({
//                   //         form: f => [
//                     //           f.select({
//                       //             selections: addableDivisions.map((division) => [division, divisions[division]]),
//                       //             placeholder: '+ Add',
//                       //             selectTag: {
//                         //               $on: {
//                           //                 'input': (e, el) => route.open(`${el.value}`)
//                           //               },
//                           //             }
//                           //           })
//                           //         ]
//                           //       })
//                           //     ]),
//                           //
//                           //     a.div([
//                             //       'about',
//                             //       // 'title',
//                             //       // 'description',
//                             //       // 'licenses',
//                             //       'configuration',
//                             //       'binding_target',
//                             //       'bindings',
//                             //       'system_packages',
//                             //       'other_packages',
//                             //       // 'packing',
//                             //       'permissions',
//                             //       'provider',
//                             //       'modules',
//                             //       'images',
//                             //       // 'containers',
//                             //       'volumes',
//                             //     ].map(
//                               //       (division) => app.admin.blueprints.specification.division(route, specification, division)
//                               //     )),
//                               //
//                               //   ])
//                               //
//                               // }
//                             ]
