app.docker.composition.application.info = (application) =>
a['app-docker-composition-application-info']({
  $open: (el) => () => {
    el.style.display = 'block'
    el.$nodes = a['div.well.m-1']([
      a['div.p-1.overflow-auto']([
        app.fetch({
          url: `/api/resolutions/@${application.identifier}`,
          placeholder: a['div.p-2']([app.spinner('Loading')]),
          success: (info) => a.div([
            x.out(info)
          ], {
            style: {
              maxHeight: '300px',
              fontFamily: 'monospace',
            },
          }),
        }),
      ]),
    ])
  },
  $close: (el) => () => {
    el.style.display = 'none'
  },
  style: {display: 'none'}
})
