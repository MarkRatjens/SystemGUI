app.docker.blueprints.readme = (blueprint) => a['app-docker-blueprints-readme']({
  $open: (el) => () => {
    el.style.display = 'block'
    el.$nodes = a['div.well.m-1']([
      a['div.p-1.overflow-auto']([
        app.fetch({
          url: `/api/blueprints/@${blueprint.identifier}/readme`,
          placeholder: app.spinner('Loading readme'),
          success: (readme) => a['div.p-1']([
            readme ? app.md(readme) : app.placeholder('No readme'),
          ], {
            style: {
              maxHeight: '300px',
            },
          })
        }),
      ]),
    ])
  },
  $close: (el) => () => {
    el.style.display = 'none'
  },
  style: {display: 'none'}
})
