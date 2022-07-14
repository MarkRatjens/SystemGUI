app.docker.prebuilds.info = (prebuild) => a['app-docker-prebuilds-info']({
  $open: (el) => () => {
    el.style.display = 'block'
    el.$nodes = a['div.well.m-1']([
      a['div.p-1.overflow-auto']([
        app.fetch({
          url: `/api/resolutions/@${prebuild}`,
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
