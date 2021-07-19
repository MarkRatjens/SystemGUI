// app.arenas.form = (route, f) => [
//   f.field({
//     key: 'about',
//     label: false,
//     as: 'one',
//     form: ff => [
//       ff.field({
//         key: 'title',
//       }),
//       ff.field({
//         key: 'explanation',
//       }),
//     ]
//   }),
//   f.field({
//     key: 'bindings',
//     // label: false,
//     as: 'table',
//     addable: true,
//     removeable: true,
//     moveable: true,
//     collection: true,
//     singular: 'binding',
//     form: ff => [
//       ff.field({
//         key: 'target_identifier',
//         as: 'select',
//         selections: ['phpmyadmin'],
//       }),
//     ]
//   }),
//   f.field({
//     key: 'domains',
//     collection: true,
//     singular: 'domain',
//     required: true,
//     addable: true,
//     removeable: true,
//   }),
// ]
