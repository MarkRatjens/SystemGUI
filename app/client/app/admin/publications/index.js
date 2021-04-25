app.admin.publications.index = (router) => (a,x) => a.div([
//   app.closeOld(() => router.open('/admin/')),
  app.close(router),
  a.h1('Publications'),
  app.button({
    label: app.icon('fa fa-plus', 'New'),
    onclick: () => router.open('~new'),
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
            onclick: (e, el) => router.open(publication),
            class: 'btn app-btn w-100 text-left',
          })
        )
      ) :
      app.placeholder('None')
    ]
  }),
])
