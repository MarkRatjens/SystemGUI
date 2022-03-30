app.docker.composition.resolutions = (composition) => a['app-docker-composition-resolutions.d-block.border-top']([
  app.fetch({
    url: `/api/resolutions`,
    query: {arena_identifier: composition.identifier},
    placeholder: app.spinner('Loading'),
    success: (resolutions) => resolutions.length
    ? resolutions.map(resolution => {
      if (resolution.identifier[0] == '$') return ''
      return app.docker.composition.resolution(resolution)
    })
    : a['div.p-2']([
      app.placeholder('No applications')
    ]),
  }),
])
