// app.blueprints.design.index = (route) => (a, x) =>  app.fetch({
//   url: '/api/blueprints',
//   placeholder: a['div.p-2'](app.spinner("Loading blueprints")),
//   success: blueprints => [
//     app.close(route),
//     a.h1('Designer'),
//     a.table([
//       // a.thead([
//       //   a.tr([
//       //     a.th(['Identifier']),
//       //     a.th(['Title']),
//       //     a.th(['Explanation']),
//       //   ]),
//       // ]),
//       a.tbody(blueprints.map(blueprint => a.tr([
//         // a.td([blueprint.utilized ? app.icon('far fa-dot-circle') : null]),
//         a.td([blueprint.identifier]),
//         a.td([app.publicationLabel(blueprint.publication) || '']),
//       ], {
//         $on: {click: () => route.open(blueprint.identifier)},
//         class: 'app-clickable',
//       }))),
//     ], {
//       class: 'table',
//     })
//   ],
// })
