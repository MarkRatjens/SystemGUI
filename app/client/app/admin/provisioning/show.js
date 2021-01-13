app.admin.provisioning.show = (router) => (a, x) => [
  app.http({
    url: `/api/provisioning/${router.params.arena_id}/${router.params.resolution_id}`,
    placeholder: app.spinner('Loading provision'),
    success: (provision, el) => {
      el.$nodes = a({
        $tag: 'app-provision',
        $state: provision,
        $nodes: (el, provision) => [
          app.float({
            right: [
              app.button({
                label: app.icon("fas fa-drafting-compass", "Resolution"),
                onclick: () => router.open(`/admin/resolutions/${router.params.resolution_id}`),
              }),
            ],
          }),
          a.hr,
          x.out(provision),
          a.hr,
          app.float({
            right: [
              app.button({
                label: app.icon("fa fa-trash", "Delete"),
                onclick: () => router.open(`/admin/provisioning/${router.params.arena_id}/${router.params.resolution_id}/delete`),
                class: "btn btn-outline-danger",
              }),
            ]
          }),
        ],
      })
    },
  }),
];
