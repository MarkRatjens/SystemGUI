app.admin.blueprints.specification.menu = (route, specification) => (a,x) => {

  let divisions = {
    about: 'About',
    bindings: 'Bindings',
    binding_target: 'Binding target',
    configuration: 'Configuration',
    images: 'Images',
    modules: 'Modules',
    other_packages: 'Other packages',
    permissions: 'Permissions',
    provider: 'Provider',
    repositories: 'Repositories',
    system_packages: 'System packages',
    volumes: 'Volumes',
    // service_tasks: 'Service tasks',
  }

  let render = (route, selected) => {

    let availableDivisions = Object.keys(divisions)
    let specificationDivisions = Object.keys(specification)

    let validDivisions = availableDivisions
    .filter((division) => specificationDivisions.includes(division))
    let invalidDivisions = specificationDivisions
    .filter((division) => division != 'identifier' && !availableDivisions.includes(division))
    let addableDivisions = availableDivisions
    .filter((division) => !validDivisions.includes(division))

    return [
      // app.button({
      //   label: 'Overview',
      //   data: {division: ''},
      //   onclick: () => route.open(`/admin/blueprints/${route.params.blueprintIdentifier}`),
      //   class: 'btn app-btn d-block w-100 text-left',
      //   buttonTag: {
      //     $init: (el) => {
      //       if (selected == '') el.classList.add('active')
      //     },
      //   },
      // }),
      a.div(validDivisions.map((division) => app.button({
        label: divisions[division] || a['.error'](division),
        data: {division: division},
        onclick: () => route.open(`/admin/blueprints/${route.params.blueprintIdentifier}/${division}`),
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
            selections: addableDivisions.map((division) => [division, divisions[division]]),
            placeholder: '+ Add',
            selectTag: {
              $on: {
                'input': (e, el) => route.open(`/admin/blueprints/${route.params.blueprintIdentifier}/${el.value}`)
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
    ]
  }

  return a['app-menu.activateable'](
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
