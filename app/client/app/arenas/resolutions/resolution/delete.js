// app.arenas.resolution.delete = (route) => a.div([
//   a.h3(`Delete`),
//   a.p('Are you sure that you want to delete this resolution?'),
//   app.jsonForm({
//     url: `/api/resolutions/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
//     method: "DELETE",
//     form: (f) => [f.buttons({route: route})],
//     success: () => {
//       // dashboardMenu.$render()
//       route.open('../..')
//     },
//   }),
// ]);
