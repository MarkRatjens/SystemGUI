// app.dashboard.arenas.configuration = (router) => (a,x) => [
//   app.float({
//     left: a.h1(`${router.params.arena_id}/${router.params.blueprint_id}`),
// //     right: app.closeOld(() => router.open('../..')),
//   }),
//   app.fetch({
//     url: `/api/resolutions/${router.params.arena_id}/${router.params.blueprint_id}`,
//     success: (resolution) => app.admin.resolutions.show.body(router, resolution)
//   }),
//
// ]
