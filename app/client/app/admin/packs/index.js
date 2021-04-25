app.admin.packs.index = (router) => (a,x) => a.div([
//   app.closeOld(() => router.open('/admin/')),
  app.close(router),
  a.h1('Packs'),
  a.hr,
  app.fetch({
    url: '/api/packs',
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
])
