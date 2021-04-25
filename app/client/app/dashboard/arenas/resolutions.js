app.dashboard.arenas.resolutions = (router) => (a, x) => a.div([
  "Resolutions",
  app.fetch({
    url: `/api/arenas/${router.params.arena_id}/resolutions`,
    success: (resolutions) => resolutions.map(
      (resolution_identifier) => a.div(app.button({
        label: app.icon("fa fa-caret-right", resolution_identifier),
        onclick: () => router.open(`/resolutions/${resolution_identifier}`),
      }))
    )
  }),

])
