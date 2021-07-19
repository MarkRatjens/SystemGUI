// app.admin.packs.new = (route) => (a, x) => a.div([
//   a.h1('New pack'),
//   app.fetch({
//     url: '/api/resolutions',
//     success: (resolutions, el) => {
//       el.$nodes = [app.form({
//         url: '/api/packs',
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
//         success: (pack_id) => route.open(`../${pack_id}`),
//       })]
//     }
//   }),
//
// ]);
