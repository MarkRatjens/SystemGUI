app.docker.container.top = (container) => a['app-docker-container-top']([
  a['app-docker-container-top-output'](),
  a['app-docker-container-top-fetch'](),
],{
  $open: (el) => () => {
    el.style.display = 'block'
    el.$fetch()
  },
  $fetch: (el) => () => {
    el.$('app-docker-container-top-fetch').$nodes = a.div([
      app.fetch({
        url: `/api/docker/containers/@${container.identifier}/execute`,
        query: {execute: 'top', model: {format: 'hash'}},
        placeholder: a['div.p-2'](app.spinner('Loading containers')),
        success: (top) => {
          el.$update(top)
          return ''
        }
      })
    ])
  },
  $update: (el) => (top) => {
    el.$('app-docker-container-top-output').$nodes = [
      a['table.table.table-s.table-borderless.mt-1']([
        a.thead(top.Titles.map(title => a.th(title))),
        a.tbody(top.Processes.map(process => a.tr(process.map(col => a.td(col)))))
      ], {
        style: {
          display: 'block',
          maxHeight: '300px',
          overflowY: 'scroll',
          fontFamily: 'monospace',
        }
      }),
    ]
  },
  $restart: (el) => () => {
    el.$open()
  },
  $close: (el) => () => {
    el.style.display = 'none'
  },
  style: {display: 'none'}
})
