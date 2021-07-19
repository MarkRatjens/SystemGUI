// app.formDSL.designer2.form.components = (form) => (a, x) => [
//
//   // app.report({
//   //   object: form,
//   //   report: r => [
//   //     r.field({
//   //       key: 'components',
//   //       as: 'table',
//   //       report: rr => [
//   //         rr.field({
//   //           key: 'type',
//   //           as: 'select',
//   //           selections: [
//   //             { value: 'field', label: 'Field' },
//   //             { value: 'fieldset', label: 'Fieldset' },
//   //             { value: 'row', label: 'Row' },
//   //           ],
//   //         }),
//   //         rr.field({
//   //           key: 'key',
//   //           value: rr.object.field ? rr.object.field.key : '',
//   //         }),
//   //         rr.field({
//   //           report: rrr => [
//   //             app.button({
//   //               label: app.icon('fa fa-edit', 'Edit'),
//   //             })
//   //           ]
//   //         }),
//   //       ]
//   //     }),
//   //   ]
//   // }),
//   app.jsonForm({
//     url: `/api/blueprints/@${route.params.blueprintIdentifier}/form`,
//     route: route,
//     object: form,
//     scope: 'form',
//     form: app.formDSL.designer.form.components,
//     // form: f => [
//     //   f.field( {
//     //     key: 'components',
//     //     as: 'many',
//     //     label: false,
//     //     singular: 'form component',
//     //     collection: true,
//     //     form: app.formDSL.designer.form.field,
//     //     removeable: true,
//     //     addable: true,
//     //   } ),
//     // ],
//     // form: app.formDSL.designer2({dialogues: []}),
//   }),
// ],
//
//
//
// //  f => [
// //
// //   f.field( {
// //     key: 'components',
// //     as: 'many',
// //     label: false,
// //     singular: 'form component',
// //     collection: true,
// //     // form: app.formDSL.designer.form.component,
// //     // vertical: true,
// //     removeable: true,
// //     addable: true,
// //     moveable: true,
// //     form: ff => [
// //       ff.field( {
// //         key: 'type',
// //         as: 'select',
// //         label: false,
// //         // vertical: true,
// //         selections: [
// //           { value: 'field', label: 'Field' },
// //           { value: 'fieldset', label: 'Fieldset' },
// //           { value: 'row', label: 'Row' },
// //           // { value: 'template', label: 'Template' },
// //         ],
// //       } ),
// //       ff.field({
// //         key: 'key',
// //
// //       })
// //     ]
// //   } ),
// //
// // ]
// // blueprint => f => (a,x) => [
// //
// //   f.field( {
// //     key: 'components',
// //     label: false,
// //     as: 'many',
// //     collection: true,
// //     singular: 'dialogue component',
// //     form: app.formDSL.designer.component( blueprint ),
// //     // vertical: true,
// //     addable: true,
// //     removeable: true,
// //     moveable: true,
// //   } ),
// //
// // ]
