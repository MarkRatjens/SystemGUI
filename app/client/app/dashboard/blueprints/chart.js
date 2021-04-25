app.dashboard.blueprints.chart = (router, blueprint) => (a,x) => {

  let root = blueprint

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
    borderWidth: 2,
    iconURL: `/api/blueprints/${root.identifier}/icon/bordered`
  }]

  let childNodesFor = function(parent) {
    let size = 0
    let bindings = parent.bindings || []
    for (let binding of bindings) {
      let binding_identifier = binding.target_identifier
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
        id: `${parent.identifier}/${binding_identifier}#binding`,
        path: `/blueprints/${parent.identifier}`,
        identifier: binding_identifier,
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
        id: `${parent.identifier}/${binding_identifier}`,
        path: `/blueprints/${binding_identifier}`,
        identifier: binding_identifier,
        label: binding_identifier,
        tooltip: binding_identifier,
        parent: `${parent.identifier}/${binding_identifier}#binding`,
        type: binding.type,
        pointBackgroundColor: binding.type == 'embed' ? 'darkblue' : 'blue',
        pointStyle: 'icon',
        pointRadius: 35,
        borderWidth: 5,
        iconURL: `/api/blueprints/${binding_identifier}/icon/bordered`,
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

}
