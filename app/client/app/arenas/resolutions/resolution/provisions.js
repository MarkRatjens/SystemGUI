// app.arenas.resolution.provisions = (route) => a.div([
//   app.fetch({
//     url: [
//       `/api/provisioning/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
//     ],
//     success: ([provisions]) => a.div([
//       app.float({
//         left: [
//           a.h5('Provisions'),
//         ],
//         right: [
//           app.button({
//             label: '{} JSON',
//             title: 'Raw blueprint JSON',
//             onclick: () => {
//               modal.$open({
//                 title: `Raw ${route.params.arenaIdentifier}::${route.params.blueprintIdentifier} provisions JSON`,
//                 size: 'lg',
//                 body: [provisions],
//               })
//             },
//           }),
//         ],
//       }),
//     ])
//   }),
// ])
