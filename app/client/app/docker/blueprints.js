app.docker.blueprints = () => a['app-docker-blueprints.app-docker-command']({
  $open: (el) => () => {
    el.$nodes = [
      a['small']('Blueprints'),
      a['div.border-top']([
        app.fetch({
          url: '/api/blueprints',
          placeholder: a['div.p-2'](app.spinner('Loading blueprints')),
          success: (blueprints) => {
            return blueprints.length
            ? blueprints.map(blueprint => app.docker.blueprints.blueprint(blueprint))
            : a['div.p-2']([
              app.placeholder('No blueprints')
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
