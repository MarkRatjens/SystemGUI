app.panes = (options={}) => (a,x) => {

  let percent = window.localStorage.systemMenuWidthPercent

  if (!percent) {
    percent = (200 / document.documentElement.clientWidth) * 100
    if (percent > 33) percent = 33
  }

  return x.panes({
    percent: percent,
    panesTag: {
      $on: {
        'ax.appkit.panes.resize': (e, el) => {
          let percent = e.detail.percent
          window.localStorage.systemMenuWidthPercent = percent
        }
      }
    },
    ...options,
  })

}
