app.user_keys.delete = (route) => (a,x) => a.div([
  a.h3(`Delete`),
  a.p('Are you sure that you want to delete this user key?'),
  app.form({
    url: `/api/user_keys/@${route.params.userKeyIdentifier}`,
    method: "DELETE",
    form: (f) => [f.buttons({route: route})],
    success: () => {
      route.open('../..')
    },
  }),
]);
