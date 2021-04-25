app.dashboard.arenas.blueprint = (router) => (a,x) => {

  let identifier = router.params.blueprint_id

  return [
    a.h5(`${router.params.arena_id}/${identifier}`)
  ]

}
