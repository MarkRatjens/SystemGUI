// app.arenas.resolutions.images.show = (route) => a['app-arenas-resolutions-images-show']([
//   // app.button({
//   //   label: app.icon('fas fa-vector-square', 'Arena'),
//   //   onclick: () => route.open('..'),
//   // }),
//   // ' ',
//   // app.button({
//   //   label: app.icon('fas fa-edit', 'Edit'),
//   //   onclick: () => route.open('edit'),
//   // }),
//   // ' ',
//   // app.button({
//   //   label: app.icon('fas fa-hammer', 'Prebuild'),
//   //   onclick: () => route.open('prebuild'),
//   // }),
//   app.fetch({
//     url: `/api/images/@${route.params.imageIdentifier}`,
//     xxxsuccess: (image) => a.div([
//       app.float({
//         left: [
//         ],
//         right: [
//           app.button({
//             label: '{} JSON',
//             title: 'Raw image JSON',
//             onclick: () => {
//               modal.$open({
//                 title: `Raw ${route.params.arenaIdentifier} > ${route.params.blueprintIdentifier} image JSON`,
//                 body: [
//                   a.h5('Model'),
//                   image,
//                   a.h5('State/Summary'),
//                   summary,
//                 ],
//               })
//             },
//           }),
//         ],
//       }),
//       a.hr,
//
//       a.p(!summary.pack.exist
//         ? [
//           a['.error'](app.icon('fas fa-exclamation-circle', 'No pack')),
//           ' Please pack arena',
//         ]
//         : !summary.orchestration.exist
//         ? [
//           a['.error'](app.icon('fas fa-exclamation-circle', 'No orchestration')),
//           ' Please provision arena',
//         ]
//         : summary.stale
//         ? [
//           a['.error'](app.icon('fas fa-exclamation-circle', 'Stale')),
//           ' Requires edit',
//         ]
//         : [
//           a['.success'](app.icon('fas fa-check-circle', 'Ready')),
//           ' Buildable',
//         ]
//       ),
//       // a.hr,
//       // x.out(image),
//     ])
//   }),
//   // app.arenas.images.images(route),
//   // app.arenas.images.capsules(route),
//   a.hr,
//   app.float({
//     left: [
//     ],
//     right: [
//       app.button({
//         label: app.icon('fa fa-trash'),
//         title: 'Delete image',
//         class: 'btn btn-outline-danger',
//         onclick: () => route.open('delete'),
//       }),
//     ],
//   }),
// ])
