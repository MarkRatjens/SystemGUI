app.admin.provisioning.index = (router) => (a,x) => a.div([
//   app.closeOld(() => router.open('/admin/')),
  app.close(router),
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
            onclick: (e, el) => router.open(provisions),
            class: 'btn app-btn w-100 text-left',
          })
        )
      ) :
      app.placeholder('None')
    ]
  }),
])
