app.admin.domains.index = (router) => (a,x) => a.div([
//   app.closeOld(() => router.open('/admin/')),
  app.close(router),
  a.h1('Domains'),
  app.button({
    label: app.icon('fa fa-plus', 'New'),
    onclick: () => router.open('~new'),
  }),
  a.hr,
  app.fetch({
    url: '/api/domains',
    placeholder: app.spinner('Loading domains'),
    success: (domains, el) => el.$nodes = [
      domains.length ?
      domains.map((domain) =>
        a.div(
          app.button({
            label: app.icon("fa fa-caret-right", domain),
            onclick: (e, el) => router.open(domain),
            class: 'btn app-btn w-100 text-left',
          })
        )
      ) :
      app.placeholder('None')
    ]
  }),
])
