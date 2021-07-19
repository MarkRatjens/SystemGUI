// app.dashboard.configure.show = (installation) => (route) => (a, x) => [
//   app.form({
//     object: installation,
//     url: `/api/installations/${installation.identifier}`,
//     method: 'PUT',
//     success: () => route.open('..'),
//     scope: 'installation',
//     form: f => [
//       f.field({
//         key: 'domain',
//         horizontal: true,
//       }),
//       a.br,
//       f.field({
//         key: 'configuration',
//         label: a.i(installation.identifier.split('::')[1]),
//         as: 'many',
//         form: ff => [
//           ff.field({
//             key: 'key',
//             as: 'hidden',
//           }),
//           ff.field({
//             key: 'value',
//             label: ff.object.key,
//             horizontal: true,
//           })
//         ],
//       }),
//       a.br,
//       f.field({
//         key: 'bindings',
//         horizontal: false,
//         label: false,
//         as: 'many',
//         form: ff => [
//           ff.field({
//             key: 'identifier',
//             as: 'hidden',
//           }),
//           ff.field({
//             key: 'configuration',
//             label: a.i(app.bindingLabel(ff.object)),
//             as: 'many',
//             form: fff => [
//               fff.field({
//                 key: 'key',
//                 as: 'hidden',
//               }),
//               fff.field({
//                 key: 'value',
//                 label: fff.object.key,
//                 horizontal: true,
//               })
//             ],
//           }),
//           a.br,
//         ],
//       }),
//       f.buttons({route: route}),
//     ]
//   }),
// ]
