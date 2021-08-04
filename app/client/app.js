let app = (a, x) =>
a['app'](
  [
    app.modal(),
    app.router(),
  ],
  {
    $on: {
      'ax.appkit.router.pop': (e, el) => {
        el.$$('.activatable').$activate();
      },
      'app.disconnected': (e, el) => {
        router.$load('/disconnected');
      },
    },
  }
)
