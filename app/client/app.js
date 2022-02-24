let app = () =>
a['app'](
  [
    app.modal(),
    app.fetch({
      url: '/api/settings',
      success: (settings) => {
        loadingSpinner.style.opacity = 0
        setTimeout(() => loadingSpinner.remove(), 1000)
        app.universe.settings = settings
        return app.router()
      },
    }),
  ],
  {
    $on: {
      'ax.appkit.router.pop': (e, el) => {
        el.$$('.activatable').$activate();
      },
      'app.disconnected': (e, el) => {
        router.$load('/disconnected');
      },
      'app.signedout': (e, el) => {
        router.$load('/signedout');
      },
      'app.timedout': (e, el) => {
        router.$load('/timedout');
      },
    },
  }
)
