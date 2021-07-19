app.blueprints.design.specification.menu = (route, specification) => (a,x) => {

  let render = (route, selected) => {

    let availableDivisions = Object.keys(app.blueprints.divisions)
    let specificationDivisions = Object.keys(specification)

    let validDivisions = availableDivisions
    .filter((division) => specificationDivisions.includes(division))
    let invalidDivisions = specificationDivisions
    .filter((division) => division != 'identifier' && !availableDivisions.includes(division))
    let addableDivisions = availableDivisions
    .filter((division) => !validDivisions.includes(division))

    return a['div.mt-1']([
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
      }) : a._,
      a.br,
      invalidDivisions.length ?
      a['.error']([
        'Unknown divisions',
        a.ul(invalidDivisions.map((division) => a.li(division))),
        a.hr,
      ]) : a._,
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
