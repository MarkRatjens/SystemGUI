let app = (a, x) =>
a['app'](
  [
    app.modal(),
    app.router(),
  ],
  {
    $on: {
      'ax.appkit.router.pop': (el) => (e) => {
        el.$$('.activatable').$activate();
      },
      'app.disconnected': (el) => (e) => {
        router.$load('/disconnected');
      },
      'app.signedout': (el) => (e) => {
        router.$load('/signedout');
      },
      'app.timedout': (el) => (e) => {
        router.$load('/timedout');
      },
    },
  }
)
