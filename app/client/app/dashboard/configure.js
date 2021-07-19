// app.dashboard.configure = (route, arenaIdentifier, blueprintIdentifier) => (a,x) => a['div.p-4'](
//   [
//     app.fetch({
//       url: `/api/installations/${arenaIdentifier}::${blueprintIdentifier}`,
//       placeholder: app.spinner(`Loading ${blueprintIdentifier}`),
//       success: (installation) => [
//         route.mount({
//           routes: {
//             '/?': app.dashboard.configure.show(installation),
//             // '/edit': app.dashboard.configuration.edit(resolution),
//             // '/domain': app.dashboard.configuration.domain(resolution),
//             // '/binding': app.dashboard.configuration.binding(resolution),
//           }
//         })
//       ]
//     }),
//   ]
// )
