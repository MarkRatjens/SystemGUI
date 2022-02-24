app.timedout = route => a.div([
  a.h5( "Timed out" ),
  app.button({
    label: app.icon('fas fa-sign-in-alt', 'Sign in'),
    onclick: () => route.load('/signin'),
  })
])
