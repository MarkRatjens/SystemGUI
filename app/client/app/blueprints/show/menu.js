app.blueprints.show.menu = (router, blueprint) => (a,x) => {

  let divisions = {
    'title': 'Title',
    'description': 'Description',
    'licenses': 'Licenses',
    'os_packages': 'OS packages',
    // 'packages': 'Packages',
    // 'repositories': 'Repositories',
    // 'modules': 'Modules',
    'binding_anchor': 'Anchor',
    'bindings': 'Bindings',
    'images': 'Images',
    'containers': 'Containers',
  }

  let render = (router, selected) => {

    let availableDivisions = Object.keys(divisions)
    let blueprintDivisions = Object.keys(blueprint)

    let validBlueprintDivisions = availableDivisions
    .filter((division) => blueprintDivisions.includes(division))
    let invalidBlueprintDivisions = blueprintDivisions
    .filter((division) => !availableDivisions.includes(division))
    let addableDivisions = availableDivisions
    .filter((division) => !validBlueprintDivisions.includes(division))

    return [
      app.button({
        label: app.icon('fa fa-home'),
        data: {division: ''},
        onclick: () => router.open(`/blueprints/${router.params.blueprint_id}`),
        buttonTag: {
          $init: (el) => {
            if (selected == '') el.classList.add('active')
          }
        },
      }),
      validBlueprintDivisions.map((division) => app.button({
        label: divisions[division] || a['.error'](division),
        data: {division: division},
        onclick: () => router.open(`/blueprints/${router.params.blueprint_id}/${division}`),
        buttonTag: {
          $init: (el) => {
            if (selected == division) el.classList.add('active')
          }
        },
      })),
      addableDivisions.length ? app.form({
        form: f => [
          f.select({
            selections: addableDivisions.map((division) => [division, divisions[division]]),
            placeholder: '+ Add',
            selectTag: {
              $on: {
                'input': (e, el) => router.open(`/blueprints/${router.params.blueprint_id}/${el.value}`)
              },
            }
          })
        ]
      }) : null,
      a.br,
      invalidBlueprintDivisions.length ?
      a['.error']([
        'Unknown divisions',
        a.ul(invalidBlueprintDivisions.map((division) => a.li(division)))
      ]) : null,
    ]
  }

  return a['app-menu'](
    [
      router.mount({
        routes: {
          '/?': router => render(router, ''),
          '/:division*': router => render(router, router.params.division)
        },
        lazy: false,
        transition: false,
      }),

    ],
  )

}
