app.admin.blueprints.index = (router) => (a, x) => [
  app.close(() => router.open('/admin/')),
  a.h1('Blueprints'),
  app.button({
    label: app.icon("fa fa-plus", "New"),
    onclick: () => router.open("~new"),
  }),
  app.button({
    label: app.icon("fa fa-download", "Import"),
    onclick: () => router.open("~import"),
  }),
  a.hr,
  app.http({
    url: "/api/blueprints",
    placeholder: app.spinner("Loading blueprints"),
    success: (blueprints, el) => el.$nodes = [
      blueprints.length
      ? blueprints.map((blueprint) =>
          a.div(
            app.button({
              label: app.icon("fa fa-caret-right", blueprint),
              onclick: (e, el) => router.open(blueprint),
              class: 'btn app-btn w-100 text-left',
            })
          )
        )
      : app.placeholder('None')
    ],
  }),
];
