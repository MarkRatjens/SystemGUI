app.docker.image.info = (image) => a['app-docker-image-info']({
  $open: (el) => () => {
    el.style.display = 'block'
    el.$nodes = a['div.m-1'](app.tabs({
      tabs: [
        {
          label: 'Inspect',
          body: a['div.border-left.border-bottom.border-right.p-1.overflow-auto']([
            app.fetch({
              url: `/api/docker/images/@${image.identifier}`,
              placeholder: a['div.p-2'](app.spinner('Loading image')),
              success: (info) => d.div([
                x.out(info)
              ], {
                style: {
                  maxHeight: '300px',
                  fontFamily: 'monospace',
                },
              })
            }),
          ])
        },
        {
          label: 'History',
          body: a['div.border-left.border-bottom.border-right.p-1.overflow-auto']([
            app.fetch({
              url: `/api/docker/images/@${image.identifier}/history`,
              placeholder: a['div.p-2'](app.spinner('Loading history')),
              success: (stats) => d.div([
                x.out(stats)
              ], {
                style: {
                  maxHeight: '300px',
                  fontFamily: 'monospace',
                },
              })
            }),
          ])
        }
      ]
    }))
  },
  $close: (el) => () => {
    el.style.display = 'none'
  },
  style: {display: 'none'}
})
