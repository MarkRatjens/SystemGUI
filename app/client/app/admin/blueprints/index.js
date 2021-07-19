app.admin.blueprints.index = (route) => (a, x) => a.div([
//   app.closeOld(() => route.open('/admin/')),
  app.close(route),
  a.h1('Blueprints'),
  app.button({
    label: app.icon("fa fa-plus", "New"),
    onclick: () => route.open("~new"),
  }),
  a.hr,
  app.fetch({
    url: "/api/blueprints/list",
    placeholder: app.spinner("Loading blueprints"),
    success: (blueprints, el) => el.$nodes = [
      blueprints.length
      ? a.div(blueprints.map((blueprint) =>
          a.div(
            app.button({
              label: app.icon("fa fa-angle-right", blueprint),
              onclick: (e, el) => route.open(blueprint),
              class: 'btn app-btn w-100 text-left',
            })
          )
        ))
      : app.placeholder('None')
    ],
  }),
]);
