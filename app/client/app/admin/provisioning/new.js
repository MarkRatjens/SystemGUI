// app.admin.provisioning.new = (router) => (a, x) => a.div([
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
//           f.buttons({router: router}),
//         ],
//         success: (resolution_identifier) => {
//           router.open(`../${resolution_identifier}`)
//         },
//       })]
//     }
//   }),
//
// ]);
