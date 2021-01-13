app.dashboard.system.charts.networkOverview = (router) => (a,x) => {

  let encode = (raw) => {

    let labels = raw.result.map((device) => device.metric.interface)
    let data = raw.result.map((device) => device.value[1])

    return {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: '#48D',
      }]
    }

  }

  return [

    a({
      $init: (el) => {
        fetch('/api/metrics/network').then(
          (response) => response.json().then(el.$load)
        )
        el.$polling = setInterval(function(){
          fetch('/api/metrics/network').then(
            (response) => response.json().then(el.$refresh)
          )
        }, 60000);
      },
      $exit: (el) => {
        clearInterval(el.$polling)
      },
      $load: (el) => (data) => {
        data = encode(data)
        el.$nodes = x.chartjs({
          canvasTag: {
            height: '150px',
          },
          chartjs: {
            type: 'horizontalBar',
            data: data,
            options: {
              tooltips: { enabled: false },
              plugins: {datalabels: false},
              legend: { display: false },
              maintainAspectRatio: false,
            }
          }
        })
      },
      $refresh: (el) => (data) => {


        let chart = el.$('canvas').$chart
        data = encode(data)
        for (let i in chart.data.datasets) {
          chart.data.datasets[i].data = data.datasets[i].data
        }
        chart.update()
      },

    }),

  ]

}
