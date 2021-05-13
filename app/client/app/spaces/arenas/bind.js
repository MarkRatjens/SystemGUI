// app.spaces.arenas.bind = (router) => (a,x) => [
//   a.h3('Bind'),
//   app.fetch({
//     url: `/api/blueprints`,
//     placeholder: app.spinner('Loading'),
//     success: (blueprintIdentifiers) => a.div([
//       app.form({
//         url: `/api/arenas/${router.params.arenaIdentifier}/bind`,
//         form: (f) => [
//           f.field({
//             key: 'blueprint_identifier',
//             label: 'Blueprint',
//             as: 'select',
//             selections: blueprintIdentifiers,
//           }),
//           f.buttons({
//             router: router,
//           })
//         ],
//         success: () => router.open(`..`),
//       }),
//     ])
//   })
// ];
