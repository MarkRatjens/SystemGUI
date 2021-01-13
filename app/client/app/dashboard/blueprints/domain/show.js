app.dashboard.blueprints.domain.show = (router, resolution) => (a, x) => [

  app.float({
    left: a.strong(resolution.domain.identifier, {
      class: 'd-inline-block pt-2',
    }),
    right: app.button({
      label: app.icon('fa fa-edit'),
      onclick: () => router.open(`/blueprints/${router.params.blueprint_id}/domain`),
    }),
  })



];
