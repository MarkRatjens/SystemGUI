'use strict'
let app = (a, x) =>
a["app"](
  [
    app.modal(),
    a["div.container-fluid"]([
      app.router(),
    ])
  ],
  {
    $on: {
      "ax.appkit.router.load": (e, el) => {
        navbar.$activate();
        el.$$('#dashboardMenu').$activate();
      },
    },
  }
)
