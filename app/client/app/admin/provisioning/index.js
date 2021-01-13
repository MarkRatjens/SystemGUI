app.admin.provisioning.index = (router) => (a,x) => [
  app.close(() => router.open('/admin/')),
  a.h1('Provisioning'),
  app.button({
    label: app.icon('fa fa-plus', 'New'),
    onclick: () => router.open('~new'),
  }),
  a.hr,
  app.http({
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
]
