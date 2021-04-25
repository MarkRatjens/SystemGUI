// app.admin.blueprints.packages.edit = (router, blueprint) =>
// app.admin.blueprints.form({
//   router: router,
//   object: blueprint,
//   form: f => [
//     f.field({
//       key: 'packages',
//       as: 'table',
//       singular: 'package',
//       addable: true,
//       removeable: true,
//       moveable: true,
//       collection: true,
//       form: app.descriptor.form,
//     }),
//   ],
//   update: (form) => {
//     if (form.packages.length) {
//       blueprint.packages = form.packages
//     } else {
//       delete blueprint.packages
//     };
//     return blueprint;
//   },
// })
