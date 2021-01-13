app.admin.resolutions.index = (router) => (a, x) => [
  app.close(() => router.open('/admin/')),
  a.h1('Resolutions'),
  app.button({
    label: app.icon("fa fa-plus", "New"),
    onclick: () => router.open("~new"),
  }),
  a.hr,
  app.http({
    url: "/api/resolutions",
    placeholder: app.spinner("Loading resolutions"),
    success: (resolutions, el) => el.$nodes = [
      resolutions.length
      ? resolutions.map((resolution) =>
          a.div([
            app.http({
              url: `/api/resolutions/${resolution}/validity`,
              success: (validity, el) => el.$('^div validity-notification').$nodes =
              validity.errors ?
              a['.error'](app.icon('fa fa-warning')) :
              a['.success'](app.icon('fa fa-check'))
            }),
            app.button({
              label: [
                app.icon("fa fa-caret-right", resolution),
                a['validity-notification.float-right'],
              ],
              onclick: (e, el) => router.open(resolution),
              class: 'btn app-btn w-100 text-left',
            }),
          ])
        )
      : app.placeholder('None')
    ],
  }),
];
