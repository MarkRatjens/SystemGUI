app.admin.arenas.index = (route) => (a,x) => a.div([
  app.close(route),
  a.h1('Arenas'),
  app.button({
    label: app.icon('fa fa-plus', 'New'),
    onclick: () => route.open('~new'),
  }),
  a.hr,
  app.fetch({
    url: '/api/arenas/list',
    placeholder: app.spinner('Loading arenas'),
    success: (arenas, el) => el.$nodes = [
      arenas.length ?
      arenas.map((arena) =>
        a.div(
          app.button({
            label: app.icon("fa fa-caret-right", arena),
            onclick: (e, el) => route.open(arena),
            class: 'btn app-btn w-100 text-left',
          })
        )
      ) :
      app.placeholder('None')
    ]
  }),
])
