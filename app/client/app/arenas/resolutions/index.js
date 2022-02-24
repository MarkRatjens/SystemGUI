// app.arenas.resolutions.index = (route) => a['app-menu-resolutions']([
//   app.fetch({
//     url: '/api/resolutions/index',
//     placeholder: app.spinner('Loading resolutions'),
//     query: {arena_identifier: route.params.arenaIdentifier},
//     success: resolutions => a.table([
//       a.tbody(app.sortByIdentifier(resolutions).map(resolution => a.tr([
//         a.td([resolution.identifier.split('::')[1]]),
//         a.td([
//           resolution.stale
//           ? a['.error'](app.icon('fas fa-exclamation-circle', 'Stale'))
//           : '',
//         ]),
//       ], {
//         $on: {click: (e, el) => route.open(`@${resolution.identifier.split('::')[1]}`)},
//         class: 'app-clickable',
//       }))),
//     ], {
//       class: 'table',
//     }),
//   }),
// ])
