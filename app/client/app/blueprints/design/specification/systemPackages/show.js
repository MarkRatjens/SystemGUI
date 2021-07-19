// app.blueprints.design.specification.systemPackages.show = (route, specification) => (a,x) =>
// app.report({
//   object: specification,
//   report: (r) => [
//     r.field({
//       key: 'system_packages',
//       label: 'System packages',
//       as: 'one',
//       report: (rr) => [
//         app.clickable(
//           rr.field({
//             key: 'adds',
//           }),
//           () => route.open('adds'),
//           {
//             clickableTag: {
//               class: 'p-2',
//             }
//           }
//         ),
//         app.clickable(
//           rr.field({
//             key: 'removes',
//           }),
//           () => route.open('removes'),
//           {
//             clickableTag: {
//               class: 'p-2',
//             }
//           }
//         ),
//       ]
//     }),
//     app.button({
//       label: app.icon('fa fa-check', 'Done'),
//       onclick: () => route.open('..'),
//       class: 'btn btn-primary',
//     }),
//   ]
// })
