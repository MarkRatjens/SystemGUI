// app.arenas.resolution.input = (route) => a.div([
//   app.fetch({
//     url: [
//       `/api/resolutions/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
//     ],
//     success: ([resolution, form]) =>
//     app.jsonForm({
//       route: route,
//       url: `/api/resolutions/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
//       form: f => Object.keys(resolution.input || {}).map(key => f.field({
//         key: key,
//         label: key,
//         value: resolution.input[key],
//       })),
//       digest: form => {
//         resolution.input = form
//         return {model: resolution}
//       }
//     }),
//   }),
//
// ])
