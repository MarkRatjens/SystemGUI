app.admin.provisioning.delete = (router) => (a,x) => [
  a.h3(`Delete?`),
  app.form({
    url: `/api/provisioning/${router.params.arena_id}/${router.params.resolution_id}`,
    method: "DELETE",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open('../../..'),
  }),
];
