app.apps.index.entries = (route) => a['app-apps-index-entries']([

  route.params.path
  ? a['div.container-fluid'](app.clickable(
    a['div.row.app-clickable.border-bottom']([
      a['div.col-md-8.p-2']([
        app.icon('fas fa-level-up-alt', '..')
      ]),
    ]),
    () => {
      let dirs = route.params.path.split('/')
      dirs.pop()
      if (dirs.length) {
        route.open('.', {path: dirs.join('/')})
      } else {
        route.open('.')
      }
    }
  ))
  : '',
  app.fetch({
    url: '/api/apps',
    query: route.params.path ? {path: route.params.path} : {},
    placeholder: a['div.p-2'](app.spinner('Loading entries')),
    success: (entries, el) => entries.length
    ? a['div.container-fluid'](entries.map(entry => app.clickable(
      a['div.row.app-clickable.border-bottom']([
        a['div.col-md-8.p-2']([
          entry.directory
          ? app.icon('fas fa-folder')
          : a.img({
            src: `/api/blueprints/@${entry.name}/icon/thumbnail`,
            height: '24',
            width: '24'
          }),
          ' ',
          entry.name,
        ]),
        a['div.col-md.p-2']([
          (entry.about || {}).title || a['!']('&nbsp;'),
        ]),
        a['div.col-md.p-2']([
          a.small([(entry.about || {}).explanation || a['!']('&nbsp;')]),
        ]),
      ]),
      () => route.open('/apps', {path: entry.path})
    ))
  )
  : a['div.p-2'](app.placeholder('No entries')),
  }),
])
