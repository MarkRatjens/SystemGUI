app.admin.resolutions.index = (route) => (a, x) => a.div([
//   app.closeOld(() => route.open('/admin/')),
  app.close(route),
  a.h1('Resolutions'),
  // app.button({
  //   label: app.icon("fa fa-plus", "New"),
  //   onclick: () => route.open("~new"),
  // }),
  a.hr,
  app.fetch({
    url: "/api/resolutions",
    placeholder: app.spinner("Loading resolutions"),
    success: (resolutions, el) => el.$nodes = [
      resolutions.length
      ? resolutions.map((resolution) =>
          a.div([
            // app.fetch({
            //   url: `/api/resolutions/${resolution}/validity`,
            //   success: (validity, el) => {
            //     el.$('^div validity-notification').$nodes =
            //     validity.errors ?
            //     a['.error'](app.icon('fa fa-warning')) :
            //     a['.success'](app.icon('fa fa-check'))
            //   }
            // }),
            app.button({
              label: [
                app.icon("fa fa-caret-right", resolution),
                // a['validity-notification.float-right'],
              ],
              onclick: (e, el) => route.open(resolution),
              class: 'btn app-btn w-100 text-left',
            }),
          ])
        )
      : app.placeholder('None')
    ],
  }),
]);
