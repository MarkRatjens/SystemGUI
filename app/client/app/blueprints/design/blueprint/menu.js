app.blueprints.design.blueprint.menu = (route, blueprint) => {

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
        onclick: (e, el) => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/${division}`),
        class: 'btn app-btn d-block w-100 text-left',
        buttonTag: {
          $init: (el) => {
            if (selected == division) el.classList.add('active')
          },
        },
      }))),
      addableDivisions.length ? app.jsonForm({
        buttonless: true,
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
      }) : '',
      invalidDivisions.length ?
      a['div.error.mt-1']([
        'Unknown divisions',
        a.ul(invalidDivisions.map((division) => a.li(division))),
      ]) : '',
      a.hr,
      app.button({
        label: app.icon('fas fa-clone', 'Copy'),
        title: 'Copy blueprint',
        onclick: (e, el) => route.open('copy') //`/blueprints/@${route.params.blueprintIdentifier}/copy`),
      }),
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
