app.arenas.prebuild = (route) => a.div([
  a.h3(`Prebuild`),
  a.p('Are you sure that you want to prebuild the images for this arena?'),
  app.jsonForm({
    url: `/api/arenas/@${route.params.arenaIdentifier}/build`,
    method: "POST",
    route: route,
    form: f => [
      f.field({
        key: 'background',
        value: 'on',
        as: 'hidden',
      }),
    ],
    success: (result) => route.load('output', {timestamp: result.timestamp}),
  }),
]);
