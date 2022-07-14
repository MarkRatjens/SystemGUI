app.docker.prebuilds.new = () => a['app-docker-prebuilds-new.app-docker-command']({
  $open: (el) => () => {
    el.style.display = 'block'
    el.$nodes = a['div.m-4']([
      app.fetch({
        url: '/api/blueprints/list',
        placeholder: a['div.p-1'](app.spinner('Loading blueprints')),
        success: (blueprints) => {
          return app.jsonForm({
            url: "/api/docker/prebuild",
            buttonless: true,
            method: 'POST',
            form: (f) => [
              a['div.row.no-gutters']([
                a['div.col-lg-8.px-1']([
                  f.field({
                    key: "blueprint_identifier",
                    placeholder: 'Select blueprint for prebuild',
                    name: 'prebuild-blueprint',
                    as: 'select',
                    selections: blueprints,
                    required: true,
                    label: false,
                  }),
                ]),
                a['div.col-lg-4.px-1.text-right']([
                  f.submit(),
                ]),
              ]),
            ],
            success: (arena) => {
              el.$nodes = a['div.m-3.p-1']([
                `Created prebuild ${arena.replace('$', '')}`,
              ])
            },
          })
        },
      }),
    ])
  },
  $close: (el) => () => {
    el.style.display = 'none'
  },
  style: {display: 'none'}
})
