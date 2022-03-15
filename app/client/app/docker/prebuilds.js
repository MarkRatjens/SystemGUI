app.docker.prebuilds = () => a['app-docker-prebuilds']([
  a['div.border-top']([
    app.fetch({
      url: '/api/packs/list',
      success: (prebuilds) => prebuilds.length
      ? prebuilds.map(prebuild => {
        if (prebuild[0] != '$') return ''
        return app.docker.prebuild(prebuild)
      })
      : a['div.p-2']([app.placeholder('No prebuilds')
    ]),
  }),
  ])
], {
  $open: (el) => () => el.style.display = 'block',
  $close: (el) => () => el.style.display = 'none',
  style: {display: 'none'}
})
