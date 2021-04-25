app.admin.blueprints.edit = (router) => (a, x) => app.fetch({
  url: `/api/blueprints/${router.params.blueprint_id}`,
  placeholder: app.spinner('Loading blueprint'),
  success: (blueprint, el) => {
    el.$nodes = a({
      $tag: 'app-blueprint',
      $state: blueprint,
      $nodes: (el, blueprint) => [
        a.h2('Edit'),
        a.hr,
        a['div.row']([
          a['div.col-3'](app.admin.blueprints.edit.menu(router, blueprint)),
          a['div.col-9'](app.admin.blueprints.edit.body(router, blueprint)),
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
});
