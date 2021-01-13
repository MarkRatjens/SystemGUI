app.dashboard.blueprints.show = (router) => (a, x) => [

  app.http({
    url: [
      `/api/blueprints/${router.params.blueprint_id}`,
      `/api/resolutions/${router.params.blueprint_id}`,
    ],
    success: ([blueprint, resolution], el) => el.$nodes = [
      app.dashboard.blueprints.charts(router),
      a.hr,
      a.h1([
        a.img(null, {
          src: `/api/resolutions/${router.params.blueprint_id}/icon`,
          height: 50, width: 50
        }),
        ' ',
        router.params.blueprint_id
      ]),
      app.dashboard.blueprints.about(router, blueprint),
      a.hr,
      app.dashboard.blueprints.resolution(router, resolution),
      resolution.containers ? [
        a.hr,
        app.dashboard.blueprints.provisioning(router),
      ] : null,
      resolution.images ? [
        a.hr,
        app.dashboard.blueprints.build(router),
      ] : null,
    ],
  }),

];
