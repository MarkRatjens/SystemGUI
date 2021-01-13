app.admin.blueprints.show = (router) => (a, x) => [
  app.http({
    url: `/api/blueprints/${router.params.blueprint_id}`,
    placeholder: app.spinner('Loading blueprint'),
    success: (blueprint, el) => {
      el.$nodes = a({
        $tag: 'app-blueprint',
        $state: blueprint,
        $nodes: (el, blueprint) => [
          app.float({
            left: app.button({
              label: app.icon("fa fa-file-code", "JSON"),
              onclick: () => router.open(`/admin/blueprints/${router.params.blueprint_id}/json`),
              class: "btn btn-outline-info",
            }),
            right: app.button({
              label: app.icon("fas fa-drafting-compass", "Resolution"),
              onclick: () => router.open(`/admin/resolutions/${router.params.blueprint_id}`),
            }),
          }),
          a.hr,
          a['div.row']([
            a['div.col-3'](app.admin.blueprints.show.menu(router, blueprint)),
            a['div.col-9'](app.admin.blueprints.show.body(router, blueprint)),
          ]),
          a.hr,
          app.float({
            right: [
              app.button({
                label: app.icon("fa fa-trash", "Delete blueprint"),
                onclick: () => router.open(`/admin/blueprints/${router.params.blueprint_id}/delete`),
                class: "btn btn-outline-danger",
              }),
            ],
          }),
        ],
      })
    },
  }),
];
