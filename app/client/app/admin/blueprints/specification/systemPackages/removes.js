// app.admin.blueprints.specification.systemPackages.removes = (route, specification) =>
// app.admin.blueprints.specification.form({
//   route: route,
//   object: specification,
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
//       specification.system_packages = specification.system_packages || {}
//       specification.system_packages.removes = form.system_packages.removes
//     } else {
//       if (!specification.system_packages.adds) {
//         delete specification.system_packages
//       } else {
//         delete specification.system_packages.removes
//       }
//     };
//     return specification;
//   },
// })
