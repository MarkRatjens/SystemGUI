app.panes = (options={}) => (a,x) => x.panes({
  percent: window.localStorage.systemMenuWidthPercent || '33',
  panesTag: {
    $on: {
      'ax.appkit.panes.resize': (e, el) => {
        const panesPercent = e.detail.percent
        window.localStorage.systemMenuWidthPercent = panesPercent
      }
    }
  },
  ...options,
})
