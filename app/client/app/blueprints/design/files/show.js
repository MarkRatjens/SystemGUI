app.blueprints.design.files.show = (route) => (a, x) => [
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/files/@${route.params.fileIdentifier.replace(/::/g, '/')}`,
    success: file => [
      app.report({
        object: {file: file},
        report: r => r.field({
          key: 'file',
          label: false,
          as: 'code',
        })
      }),
      app.button({
        label: app.icon('fa fa-check', 'Done'),
        onclick: () => route.open('..'),
        class: 'btn btn-primary',
      }),
    ]
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
