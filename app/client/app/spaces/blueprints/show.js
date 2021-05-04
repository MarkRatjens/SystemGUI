app.spaces.blueprints.show = (router) => (a, x) => [
  app.close(router),
  a.h1(`${router.params.blueprintIdentifier}`),
  a.hr,
  app.fetch({
    url: [
      `/api/blueprints/${router.params.blueprintIdentifier}`,
      `/api/blueprints/${router.params.blueprintIdentifier}/readme`,
    ],
    placeholder: app.spinner("Loading blueprint"),
    success: ([blueprint, readme]) => [
      app.spaces.blueprints.show.chart(router, blueprint),
      readme ? app.md(readme) : app.placeholder('No readme'),
      // app.float({
      //   left: [blueprint],
      //   // right: app.button({
      //     //   label: app.icon('fas fa-project-diagram', 'Bind'),
      //     //   onclick: () => router.open("bind"),
      //     // }),
      // }),

    ]
  }),
]
