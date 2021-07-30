app.blueprints.design.blueprint.menu = (route, blueprint) => (a,x) => {

  let render = (route, selected) => {

    let availableDivisions = Object.keys(app.blueprints.divisions)
    let blueprintDivisions = Object.keys(blueprint)

    let validDivisions = availableDivisions
    .filter((division) => blueprintDivisions.includes(division))
    let invalidDivisions = blueprintDivisions
    .filter((division) => division != 'identifier' && !availableDivisions.includes(division))
    let addableDivisions = availableDivisions
    .filter((division) => !validDivisions.includes(division))

    return a.div([
      a.div(validDivisions.map((division) => app.button({
        label: app.blueprints.divisions[division] || a['.error'](division),
        data: {division: division},
        onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/${division}`),
        class: 'btn app-btn d-block w-100 text-left',
        buttonTag: {
          $init: (el) => {
            if (selected == division) el.classList.add('active')
          },
        },
      }))),
      addableDivisions.length ? app.form({
        form: f => [
          f.select({
            selections: addableDivisions.map((division) => [division, app.blueprints.divisions[division]]),
            placeholder: '+ Add',
            selectTag: {
              $on: {
                'input': (e, el) => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/${el.value}`)
              },
            }
          })
        ]
      }) : null,
      a.br,
      invalidDivisions.length ?
      a['.error']([
        'Unknown divisions',
        a.ul(invalidDivisions.map((division) => a.li(division))),
        a.hr,
      ]) : null,
    ])

  }

  return a['app-menu'](
    [
      route.mount({
        routes: {
          '/?': route => render(route, ''),
          '/:division*': route => render(route, route.params.division)
        },
        lazy: false,
        transition: false,
      }),

    ],
  )

}
