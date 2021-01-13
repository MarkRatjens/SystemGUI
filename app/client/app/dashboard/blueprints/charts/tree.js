app.dashboard.blueprints.charts.tree = (router, resolutions) => (a,x) => {

  let root = resolutions[0]

  let nodes = [{
    id: root.identifier,
    path: `/blueprints/${root.identifier}`,
    identifier: root.identifier,
    label: root.identifier,
    tooltip: root.identifier,
    type: 'application',
    pointBackgroundColor: 'blue',
    pointStyle: 'icon',
    pointRadius: 35,
    // borderColor: '#CCC',
    borderWidth: 2,
    iconURL: `/api/resolutions/${root.identifier}/icon`
  }]

  let childNodesFor = function(parent) {
    let size = 0
    let resolution = resolutions.find((resolution) => resolution.identifier == parent.identifier)
    let bindings = resolution.bindings || []
    for (let binding of bindings) {
      let binding_identifier = binding.descriptor.identifier
      let configuration = binding.configuration || []
      let binding_tooltip = []
      for (let key of Object.keys(configuration)) {
        binding_tooltip.push(`${key}: ${configuration[key]}`)
      }
      let embed = binding.type == 'embed'
      let bindingNode = {
        id: `${parent.id}/${binding_identifier}#binding`,
        path: `/blueprints/${parent.id}`,
        identifier: binding_identifier,
        label: '',
        tooltip: binding_tooltip,
        parent: parent.id,
        type: binding.type,
        pointBackgroundColor: embed ? '#999'  : 'white',
        // borderColor: '#CCC',
        rotation: 270,
        pointStyle: embed ? 'triangle' : 'rectRot',
        pointRadius: embed ? 10 : 15,
        pointHoverRadius: embed ? 15 : 20,
        borderWidth: embed ? 2 : 5,
      }
      let blueprintNode = {
        id: `${parent.id}/${binding_identifier}`,
        path: `/blueprints/${binding_identifier}`,
        identifier: binding_identifier,
        label: binding_identifier,
        tooltip: binding_identifier,
        parent: `${parent.id}/${binding_identifier}#binding`,
        type: binding.type,
        pointBackgroundColor: binding.type == 'embed' ? 'darkblue' : 'blue',
        // borderColor: '#CCC',
        pointStyle: 'icon',
        pointRadius: 35,
        borderWidth: 5,
        iconURL: `/api/resolutions/${binding_identifier}/icon`,
      }
      nodes.unshift(bindingNode)
      nodes.unshift(blueprintNode)
      size = size + childNodesFor(blueprintNode)
    }
    return size || 1
  }

  let size = childNodesFor(nodes[0])
  let height = `${50 + size * 100}px`

  return app.topology.tree(router, nodes, height)

}
