app.admin.provisioning.index = (route) => (a,x) => a.div([
//   app.closeOld(() => route.open('/admin/')),
  app.close(route),
  a.h1('Provisioning'),
  a.hr,
  app.fetch({
    url: '/api/provisioning',
    placeholder: app.spinner('Loading provisioning'),
    success: (provisioning, el) => el.$nodes = [
      provisioning.length ?
      provisioning.map((provisions) =>
        a.div(
          app.button({
            label: app.icon("fa fa-caret-right", provisions),
            onclick: (e, el) => route.open(provisions),
            class: 'btn app-btn w-100 text-left',
          })
        )
      ) :
      app.placeholder('None')
    ]
  }),
])
