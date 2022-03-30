app.docker.prebuilds = () => a['app-docker-prebuilds.app-docker-command']({
  $open: (el) => () => {
    el.$nodes = [
      a['small']('Prebuilds'),
      a['div.border-top']([
        app.fetch({
          url: '/api/packs/list',
          placeholder: a['div.p-2'](app.spinner('Loading prebuilds')),
          success: (prebuilds) => {
            prebuilds = prebuilds.filter(prebuild => prebuild[0] == '$')
            return prebuilds.length
            ? prebuilds.map(prebuild => {
              if (prebuild[0] != '$') return ''
              return app.docker.prebuild(prebuild)
            })
            : a['div.p-2']([
              app.placeholder('No prebuilds')
            ])
          },
        }),
      ]),
    ]
    el.style.display = 'block'
  },
  $close: (el) => () => el.style.display = 'none',
  style: {display: 'none'}
})
