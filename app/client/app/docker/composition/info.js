app.docker.composition.info = (composition) => a['app-docker-composition-info']([
  a['app-docker-composition-info-output'](),
  a['app-docker-composition-info-fetch'](),
],{
  $open: (el) => () => {
    el.style.display = 'block'
    el.$fetch()
  },
  $fetch: (el) => () => {
    el.$('app-docker-composition-info-fetch').$nodes = a.div([
      app.fetch({
        url: `/api/arenas/@${composition.identifier}`,
        placeholder: a['div.p-2'](app.spinner('Loading')),
        success: (info) => {
          el.$update(info)
          return ''
        }
      })
    ])
  },
  $update: (el) => (info) => {
    el.$('app-docker-composition-info-output').$nodes = [
      a['div.well.m-1']([
        a['div.p-1.overflow-auto']([
          x.out(info)
        ])
      ], {
        style: {
          display: 'block',
          maxHeight: '300px',
          overflowY: 'scroll',
        }
      }),
    ]
  },
  $close: (el) => () => {
    el.style.display = 'none'
  },
  style: {display: 'none'}
})
