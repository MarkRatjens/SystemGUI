app.timedout = route => (a,x) => [
  a.h5( "Timed out" ),
  app.button({
    label: app.icon('fas fa-sign-in-alt', 'Sign in'),
    onclick: () => route.load('/signin'),
  })
]
