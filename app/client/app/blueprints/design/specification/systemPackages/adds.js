// app.blueprints.design.specification.systemPackages.adds = (route, specification) =>
// app.blueprints.design.specification.form({
//   route: route,
//   object: specification,
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
//       specification.system_packages = specification.system_packages || {}
//       specification.system_packages.adds = form.system_packages.adds
//     } else {
//       if (!specification.system_packages.removes) {
//         delete specification.system_packages
//       } else {
//         delete specification.system_packages.adds
//       }
//     };
//     return {specification: specification};
//   },
// })
