app.resolutions.show.menu = (router, resolution) => (a,x) => {

  let divisions = {
    'domain': 'Domain',
    'bindings': 'Bindings',
  }

  let render = (router, selected) => {

    let availableDivisions = Object.keys(divisions)
    let resolutionDivisions = Object.keys(resolution)

    let validResolutionDivisions = availableDivisions
    .filter((division) => resolutionDivisions.includes(division))
    let invalidResolutionDivisions = resolutionDivisions
    .filter((division) => !availableDivisions.includes(division))
    let addableDivisions = availableDivisions
    .filter((division) => !validResolutionDivisions.includes(division))

    return [
      app.button({
        label: app.icon('fa fa-home'),
        data: {division: ''},
        onclick: () => router.open(`/resolutions/${router.params.resolution_id}`),
        buttonTag: {
          $init: (el) => {
            if (selected == '') el.classList.add('active')
          }
        },
      }),
      validResolutionDivisions.map((division) => app.button({
        label: divisions[division] || a['.error'](division),
        data: {division: division},
        onclick: () => router.open(`/resolutions/${router.params.resolution_id}/${division}`),
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
                'input': (e, el) => router.open(`/resolutions/${router.params.resolution_id}/${el.value}`)
              },
            }
          })
        ]
      }) : null,
      a.br,
      invalidResolutionDivisions.length ?
      a['.error']([
        'Unknown divisions',
        a.ul(invalidResolutionDivisions.map((division) => a.li(division)))
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
