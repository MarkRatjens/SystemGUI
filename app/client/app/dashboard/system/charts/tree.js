app.dashboard.system.charts.tree = (router, arenas, provisioning, resolutions) => (a,x) => {


  let arenaNodes = function(arena_id) {

    let arena_size = 0

    nodes.unshift({
      id: arena_id,
      path: `/arenas/${arena_id}`,
      identifier: arena_id,
      label: arena_id,
      parent: 'system',
      type: 'arena',
      pointBackgroundColor: 'blue',
      pointStyle: 'circle',
      pointRadius: 15,
      pointHoverRadius: 20,
      borderWidth: 5,
      hoverBorderWidth: 5,
    })

    let arenaProvisioning = provisioning.filter((provisions) => provisions.split('/')[0] == arena_id)

    for (let provisions of arenaProvisioning) {

      let provisions_size = 0

      let resolution = resolutions.find((resolution) => resolution.identifier == provisions.split('/')[1])

      nodes.unshift({
        id: `${arena_id}/${resolution.identifier}`,
        path: `/blueprints/${resolution.identifier}`,
        identifier: resolution.identifier,
        label: [
          resolution.identifier,
          resolution.domain.identifier,
        ],
        parent: arena_id,
        type: 'application',
        pointStyle: 'icon',
        iconURL: `/api/resolutions/${resolution.identifier}/icon`,
        pointRadius: 40,
        borderWidth: 5,
      })

      let bindings = resolution.bindings || []
      for (let binding of bindings) {
        let binding_identifier = binding.descriptor.identifier
        if (binding.type == 'embed') {
        } else {
          if (
            !arenaProvisioning.find((provisions) => {
              console.log(provisions, binding_identifier)
              return provisions.split('/')[1] == binding_identifier
               // provisions.identifier == binding_identifier
            })
          ) {
            nodes.push({
              id: `${arena_id}/${resolution.identifier}/${binding_identifier}`,
              path: `/blueprints/${binding_identifier}`,
              identifier: binding_identifier,
              label: binding_identifier,
              tooltip: `${binding_identifier} is missing!`,
              parent: `${arena_id}/${resolution.identifier}`,
              type: 'missing',
              pointBackgroundColor: 'red',
              pointStyle: 'crossRot',
              pointRadius: 15,
              borderWidth: 5,
              pointHoverRadius: 15,
              hoverBorderWidth: 5,
            })
          } else {
            nodes.push({
              id: `${arena_id}/${resolution.identifier}/${binding_identifier}`,
              path: `/blueprints/${binding_identifier}`,
              identifier: binding_identifier,
              label: binding_identifier,
              parent: `${arena_id}/${resolution.identifier}`,
              type: 'dependency',
              pointBackgroundColor: 'white',
              pointStyle: 'rectRot',
              pointRadius: 15,
              pointHoverRadius: 20,
              borderWidth: 5,
              hoverBorderWidth: 5,
            })
          }
          provisions_size = provisions_size + 1
        }
      }
      arena_size = arena_size + (provisions_size || 1)
    }
    console.log(`arena_size || 1 ${arena_size || 1}`)
    return arena_size || 1
  }

  let nodes = [{
    id: 'system',
    path: '/',
    identifier: 'system',
    label: 'system',
    type: 'system',
    pointBackgroundColor: 'grey',
    pointStyle: 'rect',
    pointRadius: 20,
    // borderColor: '#999',
    pointHoverRadius: 25,
    borderWidth: 5,
    hoverBorderWidth: 5,
  }]

  let size = 0

  for (let arena of arenas) {
    size = size + arenaNodes(arena)
  }

  let height = `${50 + (size || 1) * 150}px`

  return app.topology.tree(router, nodes, height)

}
