app.docker.image.info = (image) => a['app-docker-image-info']({
  $open: (el) => () => {
    el.style.display = 'block'
    el.$nodes = a['div.well.m-1.p-1'](app.tabs({
      tabs: [
        {
          label: 'Inspect',
          body: a['div.p-1.overflow-auto']([
            app.fetch({
              url: `/api/docker/images/@${image.identifier}`,
              placeholder: app.spinner('Loading'),
              success: (info) => x.out(info)
            }),
          ], {
            style: {
              maxHeight: '500px',
              fontFamily: 'monospace',
            },
          })
        },
        {
          label: 'History',
          body: a['div.p-1.overflow-auto']([
            app.fetch({
              url: `/api/docker/images/@${image.identifier}/history`,
              placeholder: app.spinner('Loading'),
              success: (stats) => x.out(stats)
            }),
          ], {
            style: {
              maxHeight: '500px',
              fontFamily: 'monospace',
            },
          })
        }
      ]
    }))
  },
  $close: (el) => () => {
    el.style.display = 'none'
  },
  style: {display: 'none'}
})
