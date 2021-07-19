app.dashboard.show = (route) => (a,x) => a['app-dashboard-show']([

  app.button({
    label: app.icon('fas fa-dot-circle', 'Arenas'),
    onclick: () => route.open('/arenas'),
  }),
  app.button({
    label: app.icon('fas fa-shapes', 'Blueprints'),
    onclick: () => route.open('/blueprints'),
  }),

])
//
//
//
//   // a.hr,
//   //
//   // app.fetch({
//   //   url: '/api/dashboard',
//   //   success: dashboard => Object.keys(dashboard).map(
//   //     arenaIdentifier => [
//   //       a.h3(arenaIdentifier),
//   //       dashboard[arenaIdentifier].map(
//   //         blueprintIdentifier => app.dashboard.resolution(route, arenaIdentifier, blueprintIdentifier)
//   //       )
//   //     ]
//   //   )
//   // }),
//
//
// // app.dashboard.blueprint = (route, blueprintIdentifier) => (a,x) => [
// //   app.fetch({
// //     url: `/api/blueprints/${blueprintIdentifier}`,
// //   })
// // ]
//
//
// app.dashboard.resolution = (route, arenaIdentifier, blueprintIdentifier) => (a,x) => {
//
//   let route = `/configure::${arenaIdentifier}::${blueprintIdentifier}`
//   let routes = {
//     '/?': null,
//     '/:route': route => `/${route.params.route}` == route ?
//      app.dashboard.configure(route, arenaIdentifier, blueprintIdentifier) : null
//   }
//
//   return a.p([
//     app.button({
//       label: [
//         a.img([], {src: `/api/blueprints/${blueprintIdentifier}/icon`, height: '24', width: '24'}),
//         ' ',
//         blueprintIdentifier,
//       ],
//       onclick: () => {
//         if (
//           window.location.pathname == route
//         ) {
//           route.open('/')
//         } else {
//           route.open(route)
//         }
//       },
//     }),
//
//     route.mount({
//       // lazy: false,
//       routes: routes,
//     }),
//
//   ])
//
// }
//
// // app.collapse({
//   //   label: [
//     //     a.img([], {src: `/api/blueprints/${blueprintIdentifier}/icon`, height: '24'}),
//     //     ' ',
//     //     blueprintIdentifier,
//     //   ],
//     //   body: route.mount({
//       //     routes: {
//         //       '/?': null,
//         //       '/configuration': route: route.params.installation == `${arenaIdentifier}::${blueprintIdentifier}` ? Date.now() : null,
//         //     }
//         //   }),
//         // }),
//
//
//         // app.button({
//           //   label: app.icon('fas fa-dot-circle', 'Arenas'),
//           //   onclick: () => route.open('arenas'),
//           // }),
//           // app.button({
//             //   label: app.icon('fas fa-dot-circle', 'Arenas'),
//             //   onclick: () => route.open('arenas'),
//             // }),
