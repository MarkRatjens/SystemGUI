app.spaces.arenas.packing = (router) => (a,x) => [
  a.h3('Packing'),
  app.fetch({
    url: `/api/arenas/${router.params.arenaIdentifier}/packable`,
    placeholder: app.spinner('Loading'),
    success: (resolutionIdentifiers) => a.div([
      resolutionIdentifiers.map((resolutionIdentifier) => a.p([
        resolutionIdentifier,
        app.fetch({
          url: `/api/resolutions/${resolutionIdentifier}/status`,
        })
      ])),
    ])
  }),
  // app.form({
  //   action: () => router.open('perform'),
  //   form: (f) => [
  //     f.buttons({
  //       router: router,
  //     })
  //   ],
  // }),
];
