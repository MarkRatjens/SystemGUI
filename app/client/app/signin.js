app.signin = route => (a,x) => [
  a.h5( "Sign in" ),
  a['div.row']([
    a['div.col-sm-8.col-md-6.col-lg-4.col-xl-2']([
      app.form({
        url: '/api/session',
        method: 'POST',
        when: {401: () => 'Failed to authenticate.'},
        form: (f) => [
          f.field({
            key: 'username',
            label: false,
            placeholder: 'User',
          }),
          f.field({
            key: 'password',
            type: 'password',
            label: false,
            placeholder: 'Password',
          }),
          f.buttons({cancel: false}),
        ],
        success: () => {
          if (window.location.pathname == '/signin') {
            route.open('/')
          } else {
            route.open('.')
          }
        },
      }),
    ]),
  ]),
]
