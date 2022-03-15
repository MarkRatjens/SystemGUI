app.blueprints.chart = (route, relations) => {
  let identifier = route.params.blueprintIdentifier

  let bindings = (relations.blueprints.bindings || []).sort(function(a,b) {
    let first = a.type || 'connect'
    let second = b.type || 'connect'
    return (first < second) ? 1 : (first > second) ? -1 : 0;
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
    let spacerNode1
    let bindingNode
    let spacerNode2
    let blueprintNode
    if (binding.type == 'embed') {
      spacerNode1 = {
        id: `${identifier}/${targetIdentifier}/spacer1`,
        label: '',
        tooltip: false,
        parent: identifier,
        type: 'embed',
        pointBackgroundColor: 'grey',
        pointStyle: 'circle',
        pointRadius: 0,
        borderWidth: 5,
        labelOffset: 0,
      }
      bindingNode = {
        id: `${identifier}/${targetIdentifier}/${bindingIdentifier}`,
        label: bindingIdentifier,
        tooltip: bindingIdentifier,
        parent: `${identifier}/${targetIdentifier}/spacer1`,
        type: binding.type,
        pointBackgroundColor: 'grey',
        pointStyle: 'triangle',
        pointRadius: 10,
        rotation: 30,
        borderWidth: 5,
        labelOffset: 10,
      }
      blueprintNode = {
        id: `${identifier}/${targetIdentifier}`,
        path: `/blueprints/@${targetIdentifier}`,
        label: targetIdentifier,
        tooltip: targetIdentifier,
        parent: `${identifier}/${targetIdentifier}/${bindingIdentifier}`,
        type: 'embed',
        pointBackgroundColor: 'darkblue',
        pointStyle: 'icon',
        pointRadius: 30,
        borderWidth: 5,
        labelOffset: 25,
        iconURL: `/api/blueprints/@${targetIdentifier}/icon/bordered`,
      }
      spacerNode2 = {
        id: `${identifier}/${targetIdentifier}/spacer2`,
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
      spacerNode1 = {
        id: `${identifier}/${targetIdentifier}/${bindingIdentifier}/spacer1`,
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
      bindingNode = {
        id: `${identifier}/${targetIdentifier}/${bindingIdentifier}`,
        label: bindingIdentifier,
        tooltip: bindingIdentifier,
        parent: `${identifier}/${targetIdentifier}/${bindingIdentifier}/spacer1`,
        type: 'connect',
        pointBackgroundColor: 'grey',
        pointStyle: 'circle',
        pointRadius: 5,
        rotation: 30,
        borderWidth: 2,
        labelOffset: 5,
      }
      spacerNode2 = {
        id: `${identifier}/${targetIdentifier}/${bindingIdentifier}/spacer2`,
        label: '',
        tooltip: false,
        parent: `${identifier}/${targetIdentifier}/${bindingIdentifier}`,
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
        label: targetIdentifier,
        tooltip: targetIdentifier,
        parent: `${identifier}/${targetIdentifier}/${bindingIdentifier}/spacer2`,
        type: 'connect',
        pointBackgroundColor: 'blue',
        pointStyle: 'icon',
        pointRadius: 30,
        borderWidth: 2,
        labelOffset: 25,
        iconURL: `/api/blueprints/@${targetIdentifier}/icon/bordered`,
      }
    }
    nodes.unshift(spacerNode1, bindingNode, spacerNode2, blueprintNode)
  }

  let height = `${50 + (bindings.length || 1) * 100}px`

  return app.topology.tree(route, nodes, height)

}
