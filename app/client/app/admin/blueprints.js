app.admin.blueprints = (router) => (a, x) => [

  app.http({
    url: '/api/system/blueprinting',
    placeholder: app.spinner('Loading design environment'),
    success: (environment, el) => el.$nodes = a["app-environment"](
      router.mount({
        routes: {
          "/?": app.admin.blueprints.index,
          "/~new": app.admin.blueprints.new,
          "/~import": app.admin.blueprints.import,
          "/:blueprint_id*": app.admin.blueprints.blueprint,
        }
      }),
      {
        id: 'environment',
        $state: environment
      }
    ),
  }),

];
