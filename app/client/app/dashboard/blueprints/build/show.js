app.dashboard.blueprints.build.show = (router) => (a, x) => [

  app.http({
    url: `/api/packing/${router.params.blueprint_id}/commit`,
    success: (build, el) => el.$nodes =
    build.built ?
    [
      app.float({
        left: a.h3('Built'),
        right: [
          app.button({
            label: app.icon("fas fa-hammer", "Rebuild"),
            onclick: () => router.open(`/blueprints/${router.params.blueprint_id}/build`),
            class: 'btn btn-warning',
          }),
        ],
      }),
      build.messages.map((message) => [
        message.type == 'error' ?
        a['pre.error'](message.output) :
        a['pre.success'](message.output),
        app.xterm({
          text: message.output,
          label: message.type == 'error' ? ax.a['.error']( 'Error' ) : ax.a['.success']( 'Success' ),
        }),
      ])
    ] :
    [
      app.float({
        left: a['h3.error']('Unbuilt'),
        right: [
          app.button({
            label: app.icon("fas fa-hammer", "Build"),
            onclick: () => router.open(`/blueprints/${router.params.blueprint_id}/build`),
            class: 'btn btn-warning',
          }),
        ],
      })
    ],
  }),

]
