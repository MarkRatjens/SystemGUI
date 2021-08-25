app.blueprints.design.form.show = (route) => (a, x) => [
  app.float({
    right: [
      app.button({
        label: app.icon('fa fa-edit', 'Edit'),
        onclick: () => route.open('edit'),
      }),
    ]
  }),
  a.hr,
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/form`,
    placeholder: app.spinner('Loading blueprint form'),
    success: (form) => [
      app.formDSL.builder.form({
        components: form.components,
        cancel: {
          icon: 'times',
          label: {display: 'custom', custom: 'Reset'},
          onclick: (e, el) => el.$('^ax-appkit-asyncform').$render(),
        },
        submit: {
          icon: 'check',
          label: {display: 'custom', custom: 'Test'},
        },
      }, {}, {
        authenticity: false,
        action: (submission) => {
          modal.$open({
            title: `Test ${route.params.blueprintIdentifier} form`,
            body: [submission.form.$output()],
          })
          return true
        },
      }),
      a.hr,
      app.button({
        label: '{} JSON',
        title: 'Raw form JSON',
        onclick: () => {
          modal.$open({
            title: `Raw ${route.params.blueprintIdentifier} form JSON`,
            size: 'lg',
            body: [form],
          })
        },
      }),
    ],
  }),
]
