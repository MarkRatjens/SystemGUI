app.blueprints.relations.chart = (route, relations) => {
  let identifier = route.params.blueprintIdentifier

  let bindings = (relations.blueprints.bindings || []).sort(function(a,b) {
    let first = a.type || 'connect'
    let second = b.type || 'connect'
    return (first > second) ? 1 : (first < second) ? -1 : 0;
  })

  let nodes = [
    {
      id: identifier,
      label: identifier,
      tooltip: identifier,
      type: 'application',
      pointBackgroundColor: 'blue',
      pointStyle: 'icon',
      pointRadius: 0,
      borderWidth: 5,
      labelOffset: 25,
      iconURL: `/api/blueprints/@${identifier}/icon/bordered`
    }
  ]

  for (let binding of bindings) {
    let bindingIdentifier = binding.identifier
    let targetIdentifier = binding.target_identifier
    let label = bindingIdentifier == targetIdentifier
    ? targetIdentifier
    : `${bindingIdentifier}\n${targetIdentifier}`
    let spacerNode
    let blueprintNode
    if (binding.type == 'embed') {
      blueprintNode = {
        id: `${identifier}/${targetIdentifier}`,
        path: `/blueprints/@${targetIdentifier}`,
        label: label,
        tooltip: targetIdentifier,
        parent: identifier,
        type: 'embed',
        pointBackgroundColor: 'darkblue',
        pointStyle: 'icon',
        pointRadius: 30,
        borderWidth: 5,
        labelOffset: 25,
        iconURL: `/api/blueprints/@${targetIdentifier}/icon/bordered`,
      }
      spacerNode = {
        id: `${identifier}/${targetIdentifier}/spacer`,
        label: '',
        tooltip: false,
        parent: `${identifier}/${targetIdentifier}`,
        type: 'embed',
        pointBackgroundColor: 'grey',
        pointStyle: 'circle',
        pointRadius: 0,
        borderWidth: 0,
        labelOffset: 0,
        borderColor: 'transparent',
      }
    } else {
      spacerNode = {
        id: `${identifier}/${targetIdentifier}/${bindingIdentifier}/spacer`,
        label: '',
        tooltip: false,
        parent: identifier,
        type: 'connect',
        pointBackgroundColor: 'grey',
        pointStyle: 'circle',
        pointRadius: 0,
        rotation: 30,
        borderWidth: 2,
        labelOffset: 5,
      }
      blueprintNode = {
        id: `${identifier}/${targetIdentifier}`,
        path: `/blueprints/@${targetIdentifier}`,
        label: label,
        tooltip: targetIdentifier,
        parent: `${identifier}/${targetIdentifier}/${bindingIdentifier}/spacer`,
        type: 'connect',
        pointBackgroundColor: 'blue',
        pointStyle: 'icon',
        pointRadius: 30,
        borderWidth: 2,
        labelOffset: 25,
        iconURL: `/api/blueprints/@${targetIdentifier}/icon/bordered`,
      }
    }
    nodes.unshift(spacerNode, blueprintNode)
  }

  let height = `${50 + (bindings.length || 1) * 100}px`

  return app.topology.tree(route, nodes, height)

}
