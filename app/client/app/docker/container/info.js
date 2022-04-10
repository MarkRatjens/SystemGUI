app.docker.container.info = (container) => a['app-docker-container-info']({
  $open: (el) => () => {
    el.style.display = 'block'
    el.$nodes = a['div.m-1'](app.tabs({
      tabs: [
        {
          label: 'Inspect',
          body: a['div.border-left.border-bottom.border-right.p-1.overflow-auto']([
            app.fetch({
              url: `/api/docker/containers/@${container.identifier}`,
              placeholder: a['div.p-2'](app.spinner('Loading container')),
              success: (info) => a.div([
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
          label: 'Stats',
          body: a['div.border-left.border-bottom.border-right.p-1.overflow-auto']([
            app.fetch({
              url: `/api/docker/containers/@${container.identifier}/execute`,
              query: {execute: 'stats'},
              placeholder: a['div.p-2'](app.spinner('Loading stats')),
              success: (stats) => a.div([
                x.out(stats)
              ], {
                style: {
                  maxHeight: '300px',
                  fontFamily: 'monospace',
                },
              }),
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
