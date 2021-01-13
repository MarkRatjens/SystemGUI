app.dashboard.arenas.charts.tree = (router, resolutions, height) => (a,x) => {

  let arena_id = router.params.arena_id

  // let chart = (data) => a({
  //   $nodes: [
  //     x.chartjs({
  //       canvasTag: {
  //         height: height,
  //       },
  //       chartjs: {
  //         type: 'tree',
  //         data: {
  //           labels: data.map((d) => d.id),
  //           datasets: [{
  //             pointHoverRadius: 15,
  //             pointBackgroundColor: data.map((d) => d.pointBackgroundColor),
  //             pointStyle: data.map((d) => d.pointStyle),
  //             pointRadius: data.map((d) => d.pointRadius),
  //             rotation: data.map((d) => d.rotation),
  //             borderColor: data.map((d) => d.borderColor),
  //             borderWidth: data.map((d) => d.borderWidth),
  //             data: data,
  //           }]
  //         },
  //         options: {
  //           tooltips: {
  //             displayColors: false,
  //             callbacks: {
  //               label: function(tooltipItem, data) {
  //                 let node = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
  //                 return node.tooltip || node.label;
  //               }
  //             }
  //           },
  //           tree: {
  //             orientation: 'horizontal'
  //           },
  //           legend: {
  //             display: false
  //           },
  //           layout: {
  //             padding: {
  //               left: 100,
  //               right: 100,
  //               top: 25,
  //               bottom: 25,
  //             }
  //           },
  //           plugins: {
  //             datalabels: {
  //               align: 'top',
  //               offset: 22,
  //               font: {
  //                 weight: 'bold',
  //                 size: 14,
  //               },
  //               formatter: (d) => d.label,
  //             },
  //           },
  //           maintainAspectRatio: false,
  //         },
  //       }
  //     }),
  //   ],
  //   $on: {
  //     click: (e, el) => {
  //
  //       let closest = e.target.$chart.getElementAtEvent(e)[0]
  //       let path
  //       if (closest) {
  //         let context = closest.$datalabels[0].$context
  //         let index = context.dataIndex
  //         path = context.dataset.data[index].path
  //       } else {
  //         path = ''
  //       }
  //       router.open(path)
  //
  //     }
  //   },
  // });
  //
  // let identifierFor = (descriptor) => {
  //   let identifier = descriptor.identifier ||
  //   (descriptor.repository || '').match(/[^\/]+$/)[0].split('.')[0]
  //   if (!identifier) throw 'No identifier'
  //   return identifier
  // }

  let nodes = [{
    id: arena_id,
    path: `/arenas/${arena_id}`,
    label: arena_id,
    type: 'arena',
    pointBackgroundColor: 'blue',
    pointStyle: 'circle',
    pointRadius: 15,
    pointHoverRadius: 20,
    borderWidth: 5,
    hoverBorderWidth: 5,
  }]

  for (let resolution of resolutions) {

    nodes.unshift({
      id: `blueprints/${resolution.identifier}`,
      path: `/blueprints/${resolution.identifier}`,
      label: resolution.identifier,
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
          !resolutions.find((resolution) => resolution.identifier == binding_identifier)
        ) {
          nodes.push({
            id: `blueprints/${resolution.identifier}/${binding_identifier}`,
            path: `/blueprints/${resolution.identifier}/bindings/${binding_identifier}`,
            label: binding_identifier,
            parent: `blueprints/${resolution.identifier}`,
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
            id: `blueprints/${resolution.identifier}/${binding_identifier}`,
            path: `/blueprints/${resolution.identifier}/bindings/${binding_identifier}`,
            label: binding_identifier,
            parent: `blueprints/${resolution.identifier}`,
            type: 'dependency',
            pointBackgroundColor: 'white',
            pointStyle: 'rectRot',
            pointRadius: 15,
            pointHoverRadius: 20,
            borderWidth: 5,
            hoverBorderWidth: 5,
          })
        }
      }
    }
  }

  return app.topology.tree(router, nodes, height)

}
