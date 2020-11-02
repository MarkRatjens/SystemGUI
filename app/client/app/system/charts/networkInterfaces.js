app.system.charts.networkInterfaces = (router) => (a,x) => {

  let encode = (raw) => {

    let end = raw.result[0].values[raw.result[0].values.length - 1][0]

    let datasets = raw.result.map((device) => ({
      label: device.metric.interface,
      data: device.values.map((value) => ({x: value[0] - end, y: value[1]})),
      borderColor: '#48D',
      showLine: true,
      lineTension: 0,
      fill: false,
    }))

    return datasets

  }

  return [

    a({
      $init: (el) => {
        fetch('/api/metrics/network/matrix').then(
          (response) => response.json().then(el.$load)
        )
        el.$polling = setInterval(function(){
          fetch('/api/metrics/network/matrix').then(
            (response) => response.json().then(el.$refresh)
          )
        }, 1000);
      },
      $exit: (el) => {
        clearInterval(el.$polling)
      },
      $load: (el) => (data) => {
        data = encode(data)
        el.$nodes = data.map((dataset) => x.chartjs({
          canvasTag: {
            height: '200px',
          },
          chartjs: {
            type: 'scatter',
            data: {datasets: [dataset]},
            options: {
              tooltips: { enabled: false },
              plugins: {datalabels: false},
              legend: { display: false },
              maintainAspectRatio: false,
              title: {
                display: true,
                text: dataset.label,
                fontSize: 16,
              },
            }
          }
        }))
      },
      $refresh: (el) => (data) => {
        data = encode(data)
        let canvases = el.$$('canvas').$$
        for (let i in canvases) {
          let chart = canvases[i].$chart
          chart.data.datasets[0].data = data[i].data
          chart.update()
        }
      }
    }),

  ]

}
