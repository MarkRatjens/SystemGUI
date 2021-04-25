app.admin.resolutions.delete = (router) => (a, x) => a.div([
  a.h3(`Delete?`),
  app.form({
    url: `/api/resolutions/${router.params.resolution_id}`,
    method: "DELETE",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open('../../..'),
  }),
]);
