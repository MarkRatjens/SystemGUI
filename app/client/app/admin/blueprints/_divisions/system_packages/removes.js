// app.admin.blueprints.system_packages.removes = (router, blueprint) =>
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
//           key: 'removes',
//           label: 'System packages to remove',
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
//     if (form.system_packages.removes.length) {
//       blueprint.system_packages = blueprint.system_packages || {}
//       blueprint.system_packages.removes = form.system_packages.removes
//     } else {
//       if (!blueprint.system_packages.adds) {
//         delete blueprint.system_packages
//       } else {
//         delete blueprint.system_packages.removes
//       }
//     };
//     return blueprint;
//   },
// })
