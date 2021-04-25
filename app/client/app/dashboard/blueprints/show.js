app.dashboard.blueprints.show = (router) => (a, x) => {

  return app.fetch({
    url: `/api/blueprints/${router.params.blueprint_id}/graph`,
    success: (blueprintGraph) => [
      a.h1([
        // a.img(a._, {
        //   src: `/api/blueprints/${router.params.blueprint_id}/icon`,
        //   height: 48, width: 48
        // }),
        // ' ',
        `${router.params.blueprint_id}`
      ]),
      app.dashboard.blueprints.chart(router, blueprintGraph)
    ]
  })

};
