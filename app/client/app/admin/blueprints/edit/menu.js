app.admin.blueprints.edit.menu = (router, blueprint) => (a,x) => {

  let divisions = {
    'about': 'About',
    'configuration': 'Configuration',
    'bindings': 'Bindings',
    'binding_target': 'Binding target',
    'provider': 'Provider',
    'scaling': 'Scaling',
    'system_packages': 'System packages',
    'other_packages': 'Other packages',
    'modules': 'Modules',
    'repositories': 'Repositories',
    'permissions': 'Permissions',
    'volumes': 'Volumes',
    'images': 'Images',
    // 'containers': 'Containers',
    'service_tasks': 'Service tasks',
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
        onclick: () => router.open(`/admin/blueprints/${router.params.blueprint_id}/edit`),
        class: 'btn app-btn d-block w-100 text-left',
        buttonTag: {
          $init: (el) => {
            if (selected == '') el.classList.add('active')
          },
        },
      }),
      a.div(validBlueprintDivisions.map((division) => app.button({
        label: divisions[division] || a['.error'](division),
        data: {division: division},
        onclick: () => router.open(`/admin/blueprints/${router.params.blueprint_id}/edit/${division}`),
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
                'input': (e, el) => router.open(`/admin/blueprints/${router.params.blueprint_id}/edit/${el.value}`)
              },
            }
          })
        ]
      }) : a._,
      a.br,
      invalidBlueprintDivisions.length ?
      a['.error']([
        'Unknown divisions',
        a.ul(invalidBlueprintDivisions.map((division) => a.li(division))),
        a.hr,
      ]) : a._,
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
