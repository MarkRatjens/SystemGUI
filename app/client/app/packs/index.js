app.packs.index = (router) => (a,x) => [
  app.close(() => router.open('/')),
  a.h1('Packs'),
  app.button({
    label: app.icon('fa fa-plus', 'New'),
    onclick: () => router.open('~new'),
  }),
  a.hr,
  app.http({
    url: '/api/packs',
    placeholder: app.spinner('Loading packs'),
    success: (packs, el) => el.$nodes = [
      packs.length ?
      packs.map((pack) =>
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
