app.docker.blueprints.license = (blueprint) => a['app-docker-blueprints-license']({
  $open: (el) => () => {
    el.style.display = 'block'
    el.$nodes = a['div.well.m-1']([
      a['div.p-1.overflow-auto']([
        app.fetch({
          url: `/api/blueprints/@${blueprint.identifier}/license`,
          placeholder: app.spinner('Loading license'),
          success: (license) => a['div.p-1']([
            license ? app.md(license) : app.placeholder('No license'),
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
