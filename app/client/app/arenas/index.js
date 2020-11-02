app.arenas.index = (router) => (a,x) => [
  app.close(() => router.open('/')),
  a.h1('Arenas'),
  app.button({
    label: app.icon('fa fa-plus', 'New'),
    onclick: () => router.open('~new'),
  }),
  a.hr,
  app.http({
    url: '/api/arenas',
    placeholder: app.spinner('Loading arenas'),
    success: (arenas, el) => el.$nodes = [
      arenas.length ?
      arenas.map((arena) =>
        a.div(
          app.button({
            label: app.icon("fa fa-caret-right", arena),
            onclick: (e, el) => router.open(arena),
            class: 'btn app-btn w-100 text-left',
          })
        )
      ) :
      app.placeholder('None')
    ]
  }),
]
