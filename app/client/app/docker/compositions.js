app.docker.compositions = () => a['app-docker-compositionss.d-block.border-top']([
  app.fetch({
    url: '/api/arenas',
    success: (compositions) => compositions.length
    ? compositions.map(composition => {
      if (composition.identifier[0] == '$') return ''
      return app.docker.composition(composition)
    })
    : a['div.p-2']([
      app.placeholder('No compositions')
    ]),
  }),
])
