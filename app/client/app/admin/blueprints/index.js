app.admin.blueprints.index = (router) => (a, x) => a.div([
//   app.closeOld(() => router.open('/admin/')),
  app.close(router),
  a.h1('Blueprints'),
  app.button({
    label: app.icon("fa fa-plus", "New"),
    onclick: () => router.open("~new"),
  }),
  a.hr,
  app.fetch({
    url: "/api/blueprints",
    placeholder: app.spinner("Loading blueprints"),
    success: (blueprints, el) => el.$nodes = [
      blueprints.length
      ? a.div(blueprints.map((blueprint) =>
          a.div(
            app.button({
              label: app.icon("fa fa-caret-right", blueprint),
              onclick: (e, el) => router.open(blueprint),
              class: 'btn app-btn w-100 text-left',
            })
          )
        ))
      : app.placeholder('None')
    ],
  }),
]);
