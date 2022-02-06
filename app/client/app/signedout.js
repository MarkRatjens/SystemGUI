app.signedout = route => (a,x) => [
  a.h5( "Signed out" ),
  app.button({
    label: app.icon('fas fa-sign-in-alt', 'Sign in'),
    onclick: (el) => () => route.load('/signin'),
  })
]
