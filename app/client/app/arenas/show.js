app.arenas.show = (route) => (a,x) => [
  app.fetch({
    url: `/api/arenas/@${route.params.arenaIdentifier}`,
    placeholder: app.spinner(`Loading ${route.params.arenaIdentifier}`),
    success: (arena) => [
      // app.float({
      //   left: [
      //     arena.publication ?
      //     app.publicationLabel(arena.publication) :
      //     app.placeholder('Not published'),
      //   ],
      //   right: [
      //     arena.publication ?
      //     app.button({
      //       label: app.icon('fas fa-file-import', 'Import'),
      //       onclick: () => route.open('import'),
      //     }) : null,
      //   ],
      // }),
      app.float({
        left: [
          arena.about ? a.i([
            arena.about.title ? a.h3([arena.about.title]) : null,
            arena.about.explanation ? a.p(arena.about.explanation) : null,
          ]) : null,
        ],
        right: [
          app.button({
            label: app.icon('fas fa-edit', 'Edit'),
            onclick: () => route.open('edit'),
          }),
        ],
      }),
      a.hr,
      app.button({
        label: app.icon('fas fa-play', 'Installations'),
        onclick: () => route.open('installations'),
      }),
      arena,
      // app.tabs({
      //   tabs: [
      //     ['Readme', app.md(readme)],
      //     ['License', app.md(license)],
      //   ]
      // }),
      a.hr,
      app.button({
        label: app.icon('fa fa-trash', 'Delete arena'),
        class: 'btn btn-outline-danger',
        onclick: () => route.open('delete'),
      }),
    ]
  }),
]
