// app.arenas.resolution.artifact = (route) => a.div([
//   a.h3('Artifact'),
//   app.fetch({
//     url: `/api/packs/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/artifact`,
//     success: (artifact) => a.div([
//       a.pre(artifact),
//       a.br,
//       app.button({
//         label: app.icon('fas fa-check', 'Done'),
//         onclick: () => route.open('..'),
//         class: 'btn btn-primary',
//       }),
//     ])
//   }),
// ])
