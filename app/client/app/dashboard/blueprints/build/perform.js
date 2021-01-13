app.dashboard.blueprints.build.perform = (router) => (a, x) => [

  app.http({
    url: `/api/packing/${router.params.blueprint_id}/commit`,
    method: "POST",
    placeholder: app.spinner('Building'),
    success: () => router.open('..'),
  }),

]
