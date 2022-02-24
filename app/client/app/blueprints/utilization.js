app.blueprints.utilization = (blueprint) => (route) => {

  let none = () => a['div.pl-4'](app.placeholder('None'))

  let blueprintsMenu = (blueprints) => {
    if (blueprints.length) {
      return a.div(blueprints.map(
        (identifier) => app.button({
          label: identifier,
          title: 'Open arena',
          class:'btn app-btn d-block w-100 text-left',
          onclick: (e, el) => route.open(`/blueprints/@${identifier}`),
        })
      ))
    } else {
      return none()
    }
  }

  let blueprintArenasMenu = (arenas) => {
    let bindings = arenas.bindings
    let conscriptions = arenas.conscriptions
    if (bindings.length || conscriptions.length) {
      let all = [...bindings, ...conscriptions].sort()
      return a.div(all.map(
        (identifier) => app.button({
          label: bindings.includes(identifier) ? a.strong(identifier) : identifier,
          title: 'Open arena',
          class:'btn app-btn d-block w-100 text-left',
          onclick: (e, el) => route.open(`/arenas/@${identifier}`),
        })
      ))
    } else {
      return none()
    }
  }

  return a.div([
    app.fetch({
      url: `/api/blueprints/@${route.params.blueprintIdentifier}/relations`,
      placeholder: app.spinner(`Loading ${route.params.blueprintIdentifier}`),
      success: (relations) => a.div([
        a.p([
          'Arenas',
          blueprintArenasMenu(relations.arenas),
        ]),
        a.p([
          'Parents',
          blueprintsMenu(relations.blueprints.parents),
        ]),
        a.p([
          'Descendants',
          blueprintsMenu(relations.blueprints.descendants),
        ]),
      ])
    }),
  ])
}
