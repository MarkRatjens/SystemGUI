app.blueprints.design.form.show = (route) => (a, x) => [
  app.button({
    label: app.icon('fa fa-edit', 'Edit'),
    onclick: () => route.open('edit'),
  }),
  a.hr,
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/form`,
    placeholder: app.spinner('Loading blueprint form'),
    success: (form, el) => [
      app.formDSL.builder.form({
        components: form.components,
        cancel: {
          onclick: (e, el) => {
            el.$('^ax-appkit-asyncform').$render()
          },
        },
      }, {}, {
        action: (submission) => {
          modal.$open({
            title: `Test ${route.params.blueprintIdentifier} form`,
            body: [submission.form.$value()],
          })
          return true
        },
      }),
    ],
  }),
]
