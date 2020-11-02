app.applications.index = (router) => (a, x) => [
  app.close(() => router.open('/')),
  a.h1('Applications'),
  app.button({
    label: app.icon("fa fa-plus", "New"),
    onclick: () => router.open("~new"),
  }),
  a.hr,
  app.http({
    url: "/api/blueprints",
    placeholder: app.spinner("Loading applications"),
    success: (identifiers, el) => el.$nodes = [
      identifiers.length
      ? identifiers.map((identifier) =>
          a.div([
            app.http({
              url: `/api/resolutions/${identifier}/validity`,
              success: (validity, el) => el.$('^div validity-notification').$nodes =
              validity.errors ?
              a['.error'](app.icon('fa fa-warning')) :
              a['.success'](app.icon('fa fa-check'))
            }),
            app.button({
              label: [
                app.icon("fa fa-caret-right", identifier),
                a['validity-notification.float-right'],
              ],
              onclick: (e, el) => router.open(identifier),
              class: 'btn app-btn w-100 text-left',
            }),
          ])
        )
      : app.placeholder('None')
    ]
  }),
];
