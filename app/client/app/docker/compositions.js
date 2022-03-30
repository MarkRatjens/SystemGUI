app.docker.compositions = () => a['app-docker-compositions.app-docker-command']({
  $open: (el) => () => {
    el.$nodes = [
      a['small']('Compositions'),
      a['div.border-top']([
        app.fetch({
          url: '/api/arenas',
          success: (compositions) => {
            compositions = compositions.filter(composition => composition.identifier[0] != '$')
            return compositions.length
            ? compositions.map(composition => {
              return app.docker.composition(composition)
            })
            : a['div.p-2']([
              app.placeholder('No compositions')
            ])
          }
        }),
      ]),
    ]
    el.style.display = 'block'
  },
  $close: (el) => () => el.style.display = 'none',
  style: {display: 'none'}
})
