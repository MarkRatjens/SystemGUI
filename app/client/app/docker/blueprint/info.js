app.docker.blueprint.info = (blueprint) => a['app-docker-blueprint-info']({
  $open: (el) => () => {
    el.style.display = 'block'
    el.$nodes = a['div.well.mt-1']([
      a['div.p-1.overflow-auto']([
        app.fetch({
          url: `/api/blueprints/@${blueprint.identifier}`,
          placeholder: app.spinner('Loading'),
          success: (info) => a.div([
            x.out(info)
          ], {
            style: {
              maxHeight: '300px',
              fontFamily: 'monospace',
            },
          })
        }),
      ]),
    ])
  },
  $close: (el) => () => {
    el.style.display = 'none'
  },
  style: {display: 'none'}
})
