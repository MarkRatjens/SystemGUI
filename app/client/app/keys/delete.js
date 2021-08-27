app.keys.delete = (route) => (a,x) => a.div([
  a.h3(`Delete`),
  a.p('Are you sure that you want to delete this token?'),
  app.form({
    url: `/api/keys/@${route.params.keyIdentifier}`,
    method: "DELETE",
    form: (f) => [f.buttons({route: route})],
    success: () => {
      route.open('../..')
    },
  }),
]);
