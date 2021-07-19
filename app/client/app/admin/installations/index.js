app.admin.installations.index = (route) => (a, x) => a.div([
//   app.closeOld(() => route.open('/admin/')),
  app.close(route),
  a.h1('Installations'),
  // app.button({
  //   label: app.icon("fa fa-plus", "New"),
  //   onclick: () => route.open("~new"),
  // }),
  a.hr,
  app.fetch({
    url: "/api/installations",
    placeholder: app.spinner("Loading installations"),
    success: (installations, el) => el.$nodes = [
      installations.length
      ? installations.map((installation) =>
          a.div([
            // app.fetch({
            //   url: `/api/installations/${installation}/validity`,
            //   success: (validity, el) => {
            //     el.$('^div validity-notification').$nodes =
            //     validity.errors ?
            //     a['.error'](app.icon('fa fa-warning')) :
            //     a['.success'](app.icon('fa fa-check'))
            //   }
            // }),
            app.button({
              label: [
                app.icon("fa fa-caret-right", installation),
                // a['validity-notification.float-right'],
              ],
              onclick: (e, el) => route.open(installation),
              class: 'btn app-btn w-100 text-left',
            }),
          ])
        )
      : app.placeholder('None')
    ],
  }),
]);
