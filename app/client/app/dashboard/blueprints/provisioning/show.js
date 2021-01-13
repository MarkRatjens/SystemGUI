app.dashboard.blueprints.provisioning.show = (router) => (a, x) => [

  app.http({
    url: `/api/provisioning`,
    query: {
      resolution_identifier: router.params.blueprint_id,
    },
    success: (provisioning, el) => {
      el.$nodes = [
        provisioning.map((provisions) => {
          let arena_identifier = provisions.split('/')[0]
          return app.button({
            label: app.icon('fas fa-caret-right', arena_identifier),
            onclick: () => router.open(`/arenas/${arena_identifier}`),
            class: 'd-block btn app-btn',
          })
        }),
        app.button({
          label: app.icon('fas fa-minus'),
          onclick: () => router.open(`/blueprints/${router.params.blueprint_id}/remove_provisions`),
          // class: 'btn btn-secondary',
        }),
        app.button({
          label: app.icon('fas fa-plus'),
          onclick: () => router.open(`/blueprints/${router.params.blueprint_id}/add_provisions`),
          // class: 'btn btn-secondary',
        }),
      ]
    }
  }),

]
