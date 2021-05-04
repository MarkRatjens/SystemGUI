app.dashboard.resolutions.chart = (router, resolution) => (a,x) => {

  let root = resolution

  let nodes = [{
    id: root.identifier,
    path: `/resolutions/${root.identifier}`,
    identifier: root.identifier,
    label: root.identifier.split('::')[1],
    tooltip: root.identifier.split('::')[1],
    type: 'application',
    pointBackgroundColor: 'blue',
    pointStyle: 'icon',
    pointRadius: 35,
    borderWidth: 2,
    iconURL: `/api/blueprints/${root.identifier.split('::')[1]}/icon/bordered`
  }]

  let childNodesFor = function(parent) {
    let size = 0
    let bindings = parent.bindings || []
    for (let i in bindings) {
      let binding = bindings[i]
      let targetIdentifier = binding.target_identifier
      let graphTargetIdentifier = binding.graph.identifier
      let configuration = binding.configuration || []
      let binding_tooltip = []
      if (Object.keys(configuration).length) {
        for (let key of Object.keys(configuration)) {
          binding_tooltip.push(`${key}: ${configuration[key]}`)
        }
      } else {
        binding_tooltip = 'No configuration'
      }
      let embed = binding.type == 'embed'
      let bindingNode = {
        id: `${parent.identifier}/${graphTargetIdentifier}#binding`,
        path: `/resolutions/${parent.identifier}/bindings/${i}`,
        identifier: graphTargetIdentifier,
        label: '',
        tooltip: binding_tooltip,
        parent: parent.identifier,
        type: binding.type,
        pointBackgroundColor: embed ? '#999'  : 'white',
        rotation: 270,
        pointStyle: embed ? 'triangle' : 'rectRot',
        pointRadius: embed ? 10 : 15,
        pointHoverRadius: embed ? 15 : 20,
        borderWidth: embed ? 2 : 5,
      }
      let blueprintNode = {
        id: `${parent.identifier}/${graphTargetIdentifier}`,
        path: `/resolutions/${graphTargetIdentifier}`,
        identifier: graphTargetIdentifier,
        label: graphTargetIdentifier.split('::')[1],
        tooltip: graphTargetIdentifier.split('::')[1],
        parent: `${parent.identifier}/${graphTargetIdentifier}#binding`,
        type: binding.type,
        pointBackgroundColor: binding.type == 'embed' ? 'darkblue' : 'blue',
        pointStyle: 'icon',
        pointRadius: 35,
        borderWidth: 5,
        iconURL: `/api/blueprints/${targetIdentifier}/icon/bordered`,
      }
      nodes.unshift(bindingNode)
      nodes.unshift(blueprintNode)
      size = size + childNodesFor(blueprintNode)
    }
    return size || 1
  }

  let size = childNodesFor(root)
  let height = `${50 + size * 100}px`

  return app.topology.tree(router, nodes, height)
  // return nodes

}
