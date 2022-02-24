app.signedout = route => a.div([
  a.h5( "Signed out" ),
  app.button({
    label: app.icon('fas fa-sign-in-alt', 'Sign in'),
    onclick: () => route.load('/signin'),
  })
])
