app.spaces.blueprints.show.chart = (router, blueprint) => (a,x) => {

  let nodes = [
    {
      id: `index#navigation`,
      path: `/blueprints`,
      label: '',
      tooltip: `Open blueprints`,
      pointBackgroundColor: 'darkblue',
      pointStyle: 'triangle',
      rotation: 270,
      pointRadius: 10,
      borderWidth: 5,
    },
    {
      id: blueprint.identifier,
      parent: `index#navigation`,
      identifier: blueprint.identifier,
      label: blueprint.identifier,
      tooltip: blueprint.identifier,
      type: 'application',
      pointBackgroundColor: 'blue',
      pointStyle: 'icon',
      pointRadius: 0,
      borderWidth: 2,
      iconURL: `/api/blueprints/${blueprint.identifier}/icon/bordered`
    }
  ]

  let bindings = blueprint.bindings || []

  for (let binding of bindings) {
    let bindingIdentifier = binding.target_identifier
    let embed = binding.type == 'embed'
    let bindingNodeJoin = {
      id: `${blueprint.identifier}/${bindingIdentifier}#binding`,
      identifier: bindingIdentifier,
      label: '',
      tooltip: embed ? 'Embed' : 'Connect',
      parent: blueprint.identifier,
      type: binding.type,
      pointBackgroundColor: embed ? '#999'  : 'white',
      rotation: 270,
      pointRadius: 0,
      pointHoverRadius: embed ? 15 : 20,
      borderWidth: embed ? 2 : 5,
    }
    let blueprintNode = {
      id: `${blueprint.identifier}/${bindingIdentifier}`,
      identifier: bindingIdentifier,
      label: bindingIdentifier,
      tooltip: bindingIdentifier,
      parent: `${blueprint.identifier}/${bindingIdentifier}#binding`,
      type: binding.type,
      pointBackgroundColor: binding.type == 'embed' ? 'darkblue' : 'blue',
      pointStyle: 'icon',
      pointRadius: 0,
      borderWidth: embed ? 2 : 5,
      iconURL: `/api/blueprints/${bindingIdentifier}/icon/bordered`,
    }
    let navigationNode = {
      id: `${blueprint.identifier}/${bindingIdentifier}#navigation`,
      parent: `${blueprint.identifier}/${bindingIdentifier}`,
      path: `/blueprints/${bindingIdentifier}`,
      label: '',
      tooltip: `Open ${bindingIdentifier}`,
      pointStyle: 'triangle',
      rotation: 90,
      pointBackgroundColor: 'darkblue',
      pointRadius: 10,
      borderWidth: 5,
    }
    nodes.unshift(bindingNodeJoin, blueprintNode, navigationNode)
  }

  if (!bindings.length) {
    nodes.unshift(
      {
        id: `${blueprint.identifier}#fake1`,
        parent: blueprint.identifier,
        label: '',
        tooltip: false,
        pointRadius: 0,
        borderColor: '#0000',
      },
      {
        id: `${blueprint.identifier}#fake2`,
        parent: `${blueprint.identifier}#fake1`,
        label: '',
        tooltip: false,
        pointRadius: 0,
        borderColor: '#0000',
      },
      {
        id: `${blueprint.identifier}#fake3`,
        parent: `${blueprint.identifier}#fake2`,
        label: '',
        tooltip: false,
        pointRadius: 0,
        borderColor: '#0000',
      }
    )
  }

  let height = `${50 + (bindings.length || 1) * 100}px`

  return app.topology.tree(router, nodes, height)

}
