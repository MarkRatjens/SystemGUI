// app.admin.blueprints.adder.form = (route, blueprint) => (a, x) => {
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
//     service_tasks: 'Service tasks',
//   }
//
//   let availableDivisions = Object.keys(divisions)
//   let specificationDivisions = Object.keys(blueprint.specification)
//   let employedDivisions = specificationDivisions
//
//   if (blueprint.readme) employedDivisions.push('readme')
//   if (blueprint.readme) employedDivisions.push('readme')
//
//
//   let validBlueprintDivisions = availableDivisions
//   .filter((division) => specificationDivisions.includes(division))
//   let invalidBlueprintDivisions = specificationDivisions
//   .filter((division) => !availableDivisions.includes(division))
//   let addableDivisions = availableDivisions
//   .filter((division) => !validBlueprintDivisions.includes(division))
//
//   return a.p([
//     app.form({
//       form: f => [
//         f.select({
//           selections: addableDivisions.map((division) => [division, divisions[division]]),
//           placeholder: '+ Add',
//           selectTag: {
//             $on: {
//               'input': (e, el) => route.open(
//                 `/admin/blueprints/${route.params.blueprintIdentifier}/${el.value}`,
//                 {},
//                 `app-blueprint-${el.value}`
//               )
//             },
//           }
//         })
//       ]
//     })
//   ])
//
// }
