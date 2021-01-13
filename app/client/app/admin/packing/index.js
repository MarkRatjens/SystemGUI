app.admin.packing.index = (router) => (a,x) => [
  app.close(() => router.open('/admin/')),
  a.h1('Packing'),
  app.button({
    label: app.icon('fa fa-plus', 'New'),
    onclick: () => router.open('~new'),
  }),
  a.hr,
  app.http({
    url: '/api/packing',
    placeholder: app.spinner('Loading packing'),
    success: (packing, el) => el.$nodes = [
      packing.length ?
      packing.map((pack) =>
        a.div(
          app.button({
            label: app.icon("fa fa-caret-right", pack),
            onclick: (e, el) => router.open(pack),
            class: 'btn app-btn w-100 text-left',
          })
        )
      ) :
      app.placeholder('None')
    ]
  }),
]
