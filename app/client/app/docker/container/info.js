app.docker.container.info = (container) => a['app-docker-container-info']({
  $open: (el) => () => {
    el.style.display = 'block'
    el.$nodes = a['div.well.m-1.p-1'](app.tabs({
      tabs: [
        {
          label: 'Inspect',
          body: a['div.p-1.overflow-auto']([
            app.fetch({
              url: `/api/docker/containers/@${container.identifier}`,
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
          label: 'Stats',
          body: a['div.p-1.overflow-auto']([
            app.fetch({
              url: `/api/docker/containers/@${container.identifier}/stats`,
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
