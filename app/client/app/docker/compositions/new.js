app.docker.compositions.new = () => a['app-docker-compositions-new.app-docker-command']({
  $open: (el) => () => {
    el.style.display = 'block'
    el.$nodes = a['div.m-4']([
      app.fetch({
        url: '/api/blueprints/list',
        placeholder: a['div.p-1'](app.spinner('Loading blueprints')),
        success: (blueprints) => {
          return app.jsonForm({
            url: "/api/docker/composition",
            buttonless: true,
            method: 'POST',
            form: (f) => [
              a['div.row.no-gutters']([
                a['div.col-lg-6.px-1']([
                  f.field({
                    key: "blueprint_identifier",
                    placeholder: 'Select blueprint for composition',
                    name: 'composition-blueprint',
                    as: 'select',
                    selections: blueprints,
                    required: true,
                    label: false,
                  }),
                ]),
                a['div.col-lg-3.px-1']([
                  f.field({
                    key: "identifier",
                    placeholder: 'Identifier optional',
                    name: 'composition-identifier',
                    label: false,
                  }),
                ]),
                a['div.col-lg-3.px-1.text-right']([
                  f.submit(),
                ]),
              ]),
            ],
            success: (arena) => {
              el.$nodes = a['div.m-3.p-1']([
                `Created composition ${arena}`,
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
