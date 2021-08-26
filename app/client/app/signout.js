app.signout = route => (a,x) => [
  a.h5( "Sign out" ),
  a['div.row']([
    a['div.col-sm-8.col-md-6.col-lg-4.col-xl-2']([
      app.form({
        url: '/api/session',
        method: 'DELETE',
        when: {401: () => 'Already signed out.'},
        form: (f) => [
          f.buttons({route: route}),
        ],
        success: () => {
          route.load('/signedout')
        },
      }),
    ]),
  ]),
]
