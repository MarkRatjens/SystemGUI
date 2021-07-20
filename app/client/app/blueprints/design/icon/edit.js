app.blueprints.design.icon.edit = (route) => (a, x) => [
  a.p('Icon'),
  app.float({
    left: [
      a({
        id: 'iconFrame',
        $nodes: (el) => [
          a({
            $tag: 'iframe',
            src: `/api/blueprints/@${route.params.blueprintIdentifier}/icon/raw`,
            height: 52,
            width: 52,
            class: 'border border-1',
          }),
          a({
            $tag: 'iframe',
            src: `/api/blueprints/@${route.params.blueprintIdentifier}/icon/bordered`,
            height: 0,
            width: 0,
            style: {border: 'none'},
          }),
          a({
            $tag: 'iframe',
            src: `/api/blueprints/@${route.params.blueprintIdentifier}/icon/thumbnail`,
            height: 0,
            width: 0,
            style: {border: 'none'},
          }),
        ],
        class: 'p-1',
      }),

      a.div([
        x.filepond({
          inputTag: {
            name: 'icon',
          },
          filepond: {
            credits: false,
            labelIdle: 'Drop icon file, or <span class="filepond--label-action">browse</span>.',
            labelTapToUndo: '',
            allowRevert: false,
            server: {
              process: {
                url: `/api/blueprints/@${route.params.blueprintIdentifier}/icon`,
                method: 'PUT',
                onload: () => {
                  setTimeout(iconFrame.$render, 1000)
                }
              },
            }
          },
        })
      ], {
        style: 'width: 300px;',
      }),

    ],
    right: [
      app.button({
        label: app.icon('fa fa-trash', 'Delete icon'),
        onclick: () => route.open('delete'),
        class: 'btn btn-outline-danger',
      }),
    ],
  }),

  a.p(
    app.button({
      label: app.icon('fa fa-check', 'Done'),
      onclick: () => route.open('..'),
      class: 'btn btn-primary',
    }),
  )
]
