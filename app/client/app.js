'use strict'
let app = (a, x) =>
a["app"](
  [
    app.modal(),
    a["div.container-fluid"]([
      app.environment()
    ])
  ],
  {
    $on: {
      "appkit.router.load": (e, el) => {
        navbar.$activate();
      },
    },
  }
)
