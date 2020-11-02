app.system.charts.softwareTopology = (router) => (a,x) => {

  return app.http({
    url: '/api/topology',
    success: (data, el) => {
      data.nodes[0].fx = 0
      el.$nodes = [
        x.chartjs({
          canvasTag: {
            height: '400px',
          },
          chartjs: {
            type: 'forceDirectedGraph',
            data: {
              labels: data.nodes.map((d) => d.id),
              datasets: [{
                pointBackgroundColor: '#48D',
                pointRadius: 10,
                data: data.nodes,
                edges: data.edges
              }]
            },
            options: {
              tooltips: { enabled: false },
              layout: {
                padding: {
                  left: 50,
                  right: 50,
                  top: 50,
                  bottom: 10
                }
              },
              simulation: {
                forces: {
                  y: {
                    y: (node, i) => {
                      if (i == 0) return 100
                      return 0
                    },
                  },
                  link: {
                    id: (d) => d.id
                  },
                }
              },
              plugins: {
                datalabels: {
                  align: 'top',
                  offset: 10,
                  formatter: (v) => {
                    return v.id;
                  },
                },
              },
              legend: { display: false },
              maintainAspectRatio: false,
            }
          }
        }),
      ]
    }
  })

}
