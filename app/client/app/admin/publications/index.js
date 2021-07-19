app.admin.publications.index = (route) => (a,x) => a.div([
//   app.closeOld(() => route.open('/admin/')),
  app.close(route),
  a.h1('Publications'),
  app.button({
    label: app.icon('fa fa-plus', 'New'),
    onclick: () => route.open('~new'),
  }),
  a.hr,
  app.fetch({
    url: '/api/publications',
    placeholder: app.spinner('Loading publications'),
    success: (publications, el) => el.$nodes = [
      publications.length ?
      publications.map((publication) =>
        a.div(
          app.button({
            label: app.icon("fa fa-caret-right", publication),
            onclick: (e, el) => route.open(publication),
            class: 'btn app-btn w-100 text-left',
          })
        )
      ) :
      app.placeholder('None')
    ]
  }),
])
