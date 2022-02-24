// app.arenas.resolution.show = (route) => a['app-arenas-resolutions-show']([
//   app.fetch({
//     url: [
//       `/api/resolutions/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
//       `/api/resolutions/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/summary`,
//       `/api/blueprints/@${route.params.blueprintIdentifier}/form`,
//     ],
//     success: ([resolution, summary, form]) => a.div([
//       summary,
//       a.hr,
//       summary.pack.exist ?
//       app.arenas.resolution.pack(route) :
//       app.placeholder('No pack'),
//       a.hr,
//       summary.provisions.exist ?
//       app.arenas.resolution.provisions(route) :
//       app.placeholder('No provisions'),
//
//       // summary.resolution.exist ?
//       // app.arenas.resolution.resolution(route) :
//       // a['div.my-2.mx-4'](app.placeholder('No resolution')),
//       a.hr,
//       app.float({
//         left: [
//           app.button({
//             label: '{} JSON',
//             title: 'Raw resolution JSON',
//             onclick: () => {
//               modal.$open({
//                 title: `Raw ${route.params.arenaIdentifier} > ${route.params.blueprintIdentifier} resolution JSON`,
//                 size: 'lg',
//                 body: [
//                   a.h5('Model'),
//                   resolution,
//                   a.h5('State/Summary'),
//                   summary,
//                 ],
//               })
//             },
//           }),
//         ],
//         right: [
//           app.button({
//             label: app.icon('fa fa-trash'),
//             title: 'Delete resolution',
//             class: 'btn btn-outline-danger',
//             onclick: () => route.open('delete'),
//           }),
//         ],
//       }),
//     ])
//   }),
// ])
