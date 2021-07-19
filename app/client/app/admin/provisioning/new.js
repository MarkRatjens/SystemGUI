// app.admin.provisioning.new = (route) => (a, x) => a.div([
//   a.h1('New provisions'),
//   app.fetch({
//     url: '/api/resolutions',
//     success: (resolutions, el) => {
//       el.$nodes = [app.form({
//         url: '/api/provisioning',
//         form: (f) => [
//           f.field({
//             key: 'resolution_identifier',
//             required: true,
//             label: false,
//             as: 'select',
//             placeholder: 'Select resolution',
//             selections: resolutions,
//           }),
//           f.buttons({route: route}),
//         ],
//         success: (resolution_identifier) => {
//           route.open(`../${resolution_identifier}`)
//         },
//       })]
//     }
//   }),
//
// ]);
