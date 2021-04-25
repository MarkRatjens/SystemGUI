app.dashboard.arenas.charts.mesh = (router, resolutions, height) => (a,x) => {

  let arena_id = router.params.arena_id

  let chart = (data) => a({
    $nodes: [
      x.chartjs({
        canvasTag: {
          height: height,
        },
        chartjs: {
          type: 'forceDirectedGraph',
          data: {
            datasets: [{
              pointBackgroundColor: (args) => {
                let node = args.dataset.data[args.dataIndex]
                if (node.type == 'arena') return 'darkgray'
                if (node.type == 'application') return 'blue'
                if (node.type == 'embed') return 'darkblue'
                return 'red'
              },
              pointHoverRadius: 15,
              pointRadius: 13,
              data: data.nodes,
              edges: data.edges,
            }]
          },
          options: {
            tooltips: { enabled: false },
            legend: {
              display: false
            },
            layout: {
              padding: {
                left: 50,
                right: 50,
                top: 25,
                bottom: 25,
              }
            },
            plugins: {
              datalabels: {
                align: 'top',
                offset: 10,
                font: {
                  weight: 'bold',
                  size: 14,
                },
                formatter: (d) => d.label,
              },
            },
            maintainAspectRatio: false,
            simulation: {
              forces: {
                // center: {
                //   strength: 0.05,
                // },
                // collide: true,
                // manyBody: {
                //   strength: 1,
                //   theta: 1,
                //   distanceMin: 10,
                //   distanceMax: 100,
                // },
                // radial: {
                //   radius: 1,
                //   strength: 10,
                // },
                link: {
                  id: (d) => d.id,
                  distance: (d) => d.target.type == 'embed' ? -10 : 20,
                  // strength: (d) => d.target.type == 'embed' ? 1 : -1,
                },
              }
            },
          },
        }
      }),
    ],
    $on: {
      click: (e, el) => {

        let closest = e.target.$chart.getElementAtEvent(e)[0]
        let path
        if (closest) {
          let context = closest.$datalabels[0].$context
          let index = context.dataIndex
          path = context.dataset.data[index].path
        } else {
          path = ''
        }
        router.open(path)

      }
    },
  });

  let identifierFor = (descriptor) => {
    let identifier = descriptor.identifier ||
    (descriptor.repository || '').match(/[^\/]+$/)[0].split('.')[0]
    if (!identifier) throw 'No identifier'
    return identifier
  }

  let nodes = [
    {
    id: arena_id,
    path: 'arena',
    label: arena_id,
    type: 'arena',
  }
];
  let edges = []

  for (let resolution of resolutions) {
    nodes.push({
      id: `blueprint/${resolution.identifier}`,
      path: `/blueprints/${resolution.identifier}`,
      label: resolution.identifier,
      type: 'application',
    })
    edges.push({
      source: arena_id,
      target: `blueprint/${resolution.identifier}`
    })
    let bindings = resolution.bindings || []
    for (let binding of bindings) {
      let binding_identifier = identifierFor(binding.descriptor)
      if (binding.type == 'embed') {
        // nodes.push({
        //   id: `blueprint/${resolution.identifier}/${binding_identifier}`,
        //   path: `/blueprints/${binding_identifier}`,
        //   label: binding_identifier,
        //   type: 'embed',
        // })
        // edges.push({
        //   source: `blueprint/${resolution.identifier}`,
        //   target: `blueprint/${resolution.identifier}/${binding_identifier}`
        // })
      } else {
        edges.push({
          source: `blueprint/${resolution.identifier}`,
          target: `blueprint/${binding_identifier}`
        })
        if (
          !resolutions.find((resolution) => resolution.identifier == binding_identifier)
          // &&
          // !nodes.find((node) => (node.type =! 'embed' && node.id == `blueprint/${binding_identifier}`))
        ) {
          nodes.push({
            id: `blueprint/${binding_identifier}`,
            path: `/blueprints/${binding_identifier}`,
            label: binding_identifier,
            type: 'missing',
          })
          edges.push({
            source: arena_id,
            target: `blueprint/${binding_identifier}`
          })
        }
      }
    }
  }

  return chart({
    nodes: nodes,
    edges: edges
  })

}
