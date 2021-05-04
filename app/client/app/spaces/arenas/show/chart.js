app.spaces.arenas.show.chart = (router, arena) => (a,x) => {

  let nodes = [{
    id: arena.identifier,
    path: `/arenas/${arena.identifier}/configure`,
    identifier: arena.identifier,
    label: arena.identifier,
    tooltip: arena.identifier,
    pointBackgroundColor: 'darkblue',
    pointRadius: 10,
    borderWidth: 5,
  }]

  let bindings = arena.bindings || []
  for (let i in bindings) {
    let binding = bindings[i]
    let targetIdentifier = binding.target_identifier
    let bindingNode = {
      id: targetIdentifier,
      path: `/arenas/${arena.identifier}/binding?bindingIndex=${i}`,
      identifier: targetIdentifier,
      label: targetIdentifier,
      tooltip: `Open ${targetIdentifier} binding configuration`,
      parent: arena.identifier,
      pointStyle: 'icon',
      pointRadius: 35,
      borderWidth: 5,
      iconURL: `/api/blueprints/${targetIdentifier}/icon/bordered`,
    }
    nodes.unshift(bindingNode)
    let resolutionNode = {
      id: `${targetIdentifier}#navigation`,
      path: `/resolutions/${arena.identifier}::${targetIdentifier}`,
      identifier: targetIdentifier,
      label: '',
      tooltip: `Open ${targetIdentifier}`,
      parent: targetIdentifier,
      pointStyle: 'triangle',
      rotation: 90,
      pointBackgroundColor: 'darkblue',
      pointRadius: 10,
      borderWidth: 5,
    }
    nodes.unshift(resolutionNode)
  }

  let height = `${50 + (bindings.length || 1) * 100}px`

  return app.topology.tree(router, nodes, height)
}
