app.dashboard.arenas.show = (router) => (a,x) =>
a.h5(router.params.arena_id)
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
