app.dashboard.arenas.system = (router) => (a,x) =>
a.h5('system')
// app.http({
//   url: '/api/arenas',
//   success: (arenas, el) => {
//     el.$nodes = arenas.map(
//       (arena) => app.button({
//         label: arena,
//         onclick: () => router.open(`/system/arenas/${arena}`),
//       })
//     )
//   }
// })
