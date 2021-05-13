// app.spaces.arenas.pack.perform = (router) => (a,x) => [
//   a.h3('Pack'),
//   app.fetch({
//     url: `/api/arenas/${router.params.arenaIdentifier}/packable`,
//     placeholder: app.spinner('Loading'),
//     success: (resolutionIdentifiers) => a.div([
//       resolutionIdentifiers.map((resolutionIdentifier) => a.p([
//         resolutionIdentifier,
//         app.fetch({
//           url: `/api/packs/${resolutionIdentifier}/commit`,
//           method: 'POST',
//         })
//       ])),
//     ])
//   })
// ];
