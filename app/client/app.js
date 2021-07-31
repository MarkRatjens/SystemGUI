let app = (a, x) =>
a["app"](
  [
    app.modal(),
    a["div.container-fluid"]([
      app.router(),
      a.br,
    ])
  ],
  {
    $on: {
      "ax.appkit.router.load": (e, el) => {
        el.$$('.activatable').$activate();
      },
      "app.disconnected": (e, el) => {
        router.$load('/disconnected');
      },
    },
  }
)
