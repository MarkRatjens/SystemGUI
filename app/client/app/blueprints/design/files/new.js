app.blueprints.design.files.new = (route) => (a, x) => [
  app.jsonForm({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/files`,
    route: route,
    method: 'POST',
    form: f => [
      f.field({
        key: 'filepath',
        label: false,
        required: true,
        placeholder: 'File path',
        pattern: '^(commissioning|packing|service_tasks)\\/[\\-\\w\\.\\/]+$',
        invalid: (value, validity, controlEl) => {
          if (value.match(/^\//)) {
            return "Must not start with a slash."
          } else if (value.match(/^(?!commissioning|packing|service_tasks)/)) {
            return "Must have a first-level directory name of either 'commissioning', 'packing', or 'service_tasks'."
          } else {
            return "Must be a valid filepath."
          }
        },

      }),
    ],
    success: (path) => route.open(`../@${path.replace(/\//g, '::')}`)
  }),
]

// app.blueprints.design.specification.bindings.index1 = (route, specification) => (a,x) => a.div([
//   app.report({
//     object: specification,
//     report: (r) => r.field({
//       key: 'bindings',
//       as: 'many',
//       report: (rr) => [
//         app.clickable(
//           a['div.p-1']([
//             app.bindingLabel(rr.object),
//           ]),
//           () => route.open(`${rr.index}`),
//         ),
//       ]
//     })
//   }),
//   a.br,
//   a['div.mb-1']([
//     app.button({
//       label: app.icon('fa fa-list', 'Manage bindings'),
//       onclick: () => route.open('manage'),
//       class: 'btn btn-secondary',
//     }),
//     ' ',
//     app.button({
//       label: app.icon('fa fa-plus', 'Add binding'),
//       onclick: () => route.open('new'),
//       class: 'btn btn-secondary',
//     }),
//   ]),
//   a['div.mb-1']([
//     app.button({
//       label: app.icon('fa fa-check', 'Done'),
//       onclick: () => route.open('..'),
//       class: 'btn btn-primary',
//     }),
//   ]),
// ])
