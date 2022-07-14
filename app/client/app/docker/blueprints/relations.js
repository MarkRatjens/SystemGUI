app.docker.blueprints.relations = (blueprint) => a['app-docker-blueprints-relations']({
  $open: (el) => () => {
    el.style.display = 'block'
    el.$nodes = a['div.well.m-1']([
      a['div.p-1.overflow-auto']([
        app.fetch({
          url: `/api/blueprints/@${blueprint.identifier}/relations`,
          placeholder: app.spinner('Loading relations'),
          success: (relations) => a['div.p-1']([
            app.docker.blueprints.relations.chart(blueprint, relations)
          ], {
            style: {
              // maxHeight: '300px',
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
