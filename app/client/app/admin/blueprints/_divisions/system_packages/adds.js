// app.admin.blueprints.system_packages.adds = (router, blueprint) =>
// app.admin.blueprints.form({
//   router: router,
//   object: blueprint,
//   form: f => [
//     f.field({
//       key: 'system_packages',
//       label: false,
//       as: 'one',
//       form: (f) => [
//         f.field({
//           key: 'adds',
//           label: 'System packages to add',
//           required: true,
//           singular: 'System package',
//           addable: true,
//           removeable: true,
//           moveable: true,
//           collection: true,
//         }),
//       ]
//     }),
//   ],
//   update: (form) => {
//     if (form.system_packages.adds.length) {
//       blueprint.system_packages = blueprint.system_packages || {}
//       blueprint.system_packages.adds = form.system_packages.adds
//     } else {
//       if (!blueprint.system_packages.removes) {
//         delete blueprint.system_packages
//       } else {
//         delete blueprint.system_packages.adds
//       }
//     };
//     return blueprint;
//   },
// })
