app.resolutions.delete = (router) => (a, x) => [
  a.h3(`Delete?`),
  app.form({
    url: `/api/resolutions/${router.params.resolution_id}`,
    method: "DELETE",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open(`../..`),
  }),
];
