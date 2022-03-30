app.docker.blueprint.relations.tree = (data, height) => a({
  $nodes: [
    x.chartjs({
      canvasTag: {
        height: height,
      },
      chartjs: {
        type: 'dendogram',
        data: {
          labels: data.map((d) => d.id),
          datasets: [{
            pointHoverRadius: data.map((d) => d.pointHoverRadius || d.pointRadius),
            pointBackgroundColor: data.map((d) => d.pointBackgroundColor),
            pointStyle: data.map((d) => {
              if (d.pointStyle == 'icon') {
                let icon = new Image()
                icon.src = d.iconURL
                return icon
              } else {
                return d.pointStyle
              }
            }),
            pointRadius: data.map((d) => d.pointRadius),
            rotation: data.map((d) => d.rotation),
            borderColor: data.map((d) => d.borderColor || '#999'),
            borderWidth: data.map((d) => d.borderWidth),
            hoverBorderWidth: data.map((d) => d.hoverBorderWidth || d.borderWidth),
            labelOffset: data.map((d) => d.labelOffset),
            data: data,
          }]
        },
        options: {
          tooltips: {
            displayColors: false,
            callbacks: {
              label: function(tooltipItem, data) {
                let node = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                return node.tooltip || node.label;
              }
            }
          },
          tree: {
            orientation: 'horizontal'
          },
          legend: {
            display: false
          },
          layout: {
            padding: {
              left: 100,
              right: 100,
              top: 25,
              bottom: 25,
            }
          },
          plugins: {
            datalabels: {
              align: 'top',
              textAlign: 'center',
              offset: (d) => d.dataset.labelOffset[d.dataIndex],
              font: {
                weight: 'bold',
                size: 14,
              },
              formatter: (d) => d.label,
            },
          },
          maintainAspectRatio: false,
          // events: ['mousemove', 'click'],
          // onHover: (event, chartElement) => {
          //   event.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
          // },
          // onClick: (event, chartElement) => {
          //   if (!chartElement[0]) return
          //   let closest = chartElement[0]._chart.getElementAtEvent(event)[0]
          //   let path
          //   if (closest) {
          //     let context = closest.$datalabels[0].$context
          //     let index = context.dataIndex
          //     path = context.dataset.data[index].path
          //   } else {
          //     path = ''
          //   }
          //   route.open(path)
          // }
        },
      }
    }),
  ],
});
