// app.admin.blueprints.specification.about.show = (route, specification) => (a,x) => a.div([
//   app.report({
//     object: specification.about,
//     report: (r) => [
//       app.clickable(
//         [
//           r.field({
//             key: 'title',
//           }),
//           r.field({
//             key: 'explanation',
//           }),
//         ],
//         () => route.open('edit'),
//         {
//           clickableTag: {
//             class: 'p-2 mb-1',
//           }
//         }
//       ),
//     ],
//   }),
//   app.clickable(
//     a.img(a._, {src: `/api/blueprints/${route.params.blueprintIdentifier}/icon`}),
//     () => route.open('icon'),
//     {
//       clickableTag: {
//         class: 'p-2 mb-1',
//       }
//     }
//   ),
//   app.clickable(
//     app.fetch({
//       url: `/api/blueprints/${route.params.blueprintIdentifier}/readme`,
//       success: (readme, el) => {
//         el.$nodes = [
//           readme ?
//           app.md(readme) :
//           a['p.error']('No readme'),
//         ]
//       },
//     }),
//     () => route.open('readme'),
//     {
//       clickableTag: {
//         class: 'p-2 mb-1',
//       }
//     }
//   ),
//   app.clickable(
//     app.fetch({
//       url: `/api/blueprints/${route.params.blueprintIdentifier}/license`,
//       success: (license, el) => {
//         el.$nodes = [
//           license ?
//           app.md(license) :
//           a['p.error']('No license'),
//         ]
//       },
//     }),
//     () => route.open('license'),
//     {
//       clickableTag: {
//         class: 'p-2 mb-1',
//       }
//     }
//   ),
//   a['div.mb-1']([
//     app.button({
//       label: app.icon('fa fa-check', 'Done'),
//       onclick: () => route.open('..'),
//       class: 'btn btn-primary',
//     }),
//   ]),
// ])
