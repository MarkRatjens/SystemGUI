// app.arenas.resolution.resolution = (route) => a.div([
//   app.fetch({
//     url: [
//       `/api/resolutions/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
//       `/api/resolutions/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/summary`,
//     ],
//     success: ([resolution, summary]) => a.div([
//       app.float({
//         left: [
//           a.h5('Resolution'),
//         ],
//         right: [
//           app.button({
//             label: '{} JSON',
//             title: 'Raw resolution JSON',
//             onclick: () => {
//               modal.$open({
//                 title: `Raw ${route.params.arenaIdentifier}::${route.params.blueprintIdentifier} resolution JSON`,
//                 size: 'lg',
//                 body: [resolution],
//               })
//             },
//           }),
//         ],
//       }),
//       a.hr,
//       summary.pack.exist ?
//       app.arenas.resolution.pack(route) :
//       app.placeholder('No pack'),
//       a.hr,
//       summary.provisions.exist ?
//       app.arenas.resolution.provisions(route) :
//       app.placeholder('No provisions'),
//     ])
//   }),
// ])
