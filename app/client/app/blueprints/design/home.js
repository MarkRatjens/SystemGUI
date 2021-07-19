// app.blueprints.design.home = (route, blueprint, specification) => (a,x) => {
//
//   let divisions = {
//     readme: 'Readme',
//     license: 'License',
//     icon: 'Icon',
//     about: 'About',
//     configuration: 'Configuration',
//     bindings: 'Bindings',
//     binding_target: 'Binding target',
//     provider: 'Provider',
//     scaling: 'Scaling',
//     system_packages: 'System packages',
//     other_packages: 'Other packages',
//     modules: 'Modules',
//     repositories: 'Repositories',
//     permissions: 'Permissions',
//     volumes: 'Volumes',
//     images: 'Images',
//     // 'containers': 'Containers',
//     service_tasks: 'Service tasks',
//   }
//
//   let availableDivisions = Object.keys(divisions)
//   let specificationDivisions = Object.keys(specification)
//
//   let validBlueprintDivisions = availableDivisions
//   .filter((division) => specificationDivisions.includes(division))
//   let invalidBlueprintDivisions = specificationDivisions
//   .filter((division) => !availableDivisions.includes(division))
//   let addableDivisions = availableDivisions
//   .filter((division) => !validBlueprintDivisions.includes(division))
//
//   return a.div([
//
//
//
//     a.p([
//       app.form({
//         form: f => [
//           f.select({
//             selections: addableDivisions.map((division) => [division, divisions[division]]),
//             placeholder: '+ Add',
//             selectTag: {
//               $on: {
//                 'input': (e, el) => route.open(`${el.value}`)
//               },
//             }
//           })
//         ]
//       })
//     ]),
//
//
//
//     a.div([
//       'about',
//       // 'title',
//       // 'description',
//       // 'licenses',
//       'configuration',
//       'binding_target',
//       'bindings',
//       'system_packages',
//       'other_packages',
//       // 'packing',
//       'permissions',
//       'provider',
//       'modules',
//       'images',
//       // 'containers',
//       'volumes',
//     ].map(
//       (division) => app.blueprints.design.specification.division(route, specification, division)
//     )),
//
//   ])
//
// }
