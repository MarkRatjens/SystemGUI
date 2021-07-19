// app.dashboard.configuration.show.chart = (route, resolution) => (a,x) => {
//
//   let nodes = [
//     {
//       id: 'arena#navigation',
//       path: `/arenas/${resolution.arena_identifier}/configurations`,
//       label: '',
//       tooltip: `Open ${resolution.arena_identifier}`,
//       pointBackgroundColor: 'darkblue',
//       pointStyle: 'triangle',
//       rotation: 270,
//       pointRadius: 10,
//       borderWidth: 5,
//     },
//     {
//       id: `domain#navigation`,
//       parent: 'arena#navigation',
//       path: `/arenas/${resolution.arena_identifier}/configurations/${resolution.blueprint_identifier}/domain`,
//       label: resolution.domain.identifier,
//       tooltip: `Edit domain`,
//       pointBackgroundColor: 'white',
//       pointStyle: 'rect',
//       rotation: 45,
//       pointRadius: 10,
//       borderWidth: 5,
//     },
//     {
//       id: resolution.identifier,
//       parent: 'domain#navigation',
//       path: `/arenas/${resolution.arena_identifier}/configurations/${resolution.blueprint_identifier}/configuration`,
//       label: resolution.blueprint_identifier,
//       tooltip: `Edit ${resolution.blueprint_identifier} configuration`,
//       pointStyle: 'icon',
//       pointRadius: 35,
//       borderWidth: 2,
//       iconURL: `/api/blueprints/${resolution.blueprint_identifier}/icon/bordered`
//     },
//   ]
//
//   let bindings = resolution.bindings || []
//   for (let i in bindings) {
//     let binding = bindings[i]
//     let targetIdentifier = binding.target_identifier
//     let embed = binding.type == 'embed'
//     let bindingNode = {
//       id: targetIdentifier,
//       parent: `${targetIdentifier}#join`,
//       path: `/arenas/${resolution.arena_identifier}/configurations/${resolution.blueprint_identifier}/bindings?bindingIndex=${i}`,
//       label: targetIdentifier,
//       tooltip: `Edit ${targetIdentifier} binding configuration`,
//       pointStyle: 'icon',
//       pointRadius: 35,
//       borderWidth: embed ? 2 : 5,
//       iconURL: `/api/blueprints/${targetIdentifier}/icon/bordered`,
//     }
//     let bindingNodeJoin = {
//       id: `${targetIdentifier}#join`,
//       parent: resolution.identifier,
//       label: '',
//       pointRadius: 0,
//       borderWidth: embed ? 2 : 5,
//     }
//     nodes.unshift(bindingNodeJoin, bindingNode)
//     let navigationNode
//     if (embed) {
//       navigationNode = {
//         id: `${targetIdentifier}#fake`,
//         parent: targetIdentifier,
//         label: '',
//         tooltip: false,
//         pointRadius: 0,
//         borderColor: '#0000',
//       }
//     } else {
//       navigationNode = {
//         id: `${targetIdentifier}#navigation`,
//         parent: targetIdentifier,
//         path: `/arenas/${resolution.arena_identifier}/configurations/${targetIdentifier}`,
//         label: '',
//         tooltip: `Open ${targetIdentifier}`,
//         pointStyle: 'triangle',
//         rotation: 90,
//         pointBackgroundColor: 'darkblue',
//         pointRadius: 10,
//         borderWidth: 5,
//       }
//     }
//     nodes.unshift(navigationNode)
//   }
//   if (!bindings.length) {
//     nodes.unshift(
//       {
//         id: `${resolution.identifier}#fake1`,
//         parent: resolution.identifier,
//         label: '',
//         tooltip: false,
//         pointRadius: 0,
//         borderColor: '#0000',
//       },
//       {
//         id: `${resolution.identifier}#fake2`,
//         parent: `${resolution.identifier}#fake1`,
//         label: '',
//         tooltip: false,
//         pointRadius: 0,
//         borderColor: '#0000',
//       },
//       {
//         id: `${resolution.identifier}#fake3`,
//         parent: `${resolution.identifier}#fake2`,
//         label: '',
//         tooltip: false,
//         pointRadius: 0,
//         borderColor: '#0000',
//       }
//     )
//   }
//
//   let height = `${50 + (bindings.length || 1) * 100}px`
//
//   return app.topology.tree(route, nodes, height)
// }
