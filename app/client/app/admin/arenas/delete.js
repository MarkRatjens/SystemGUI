app.admin.arenas.delete = (router) => (a,x) => [
  a.h3(`Delete?`),
  app.form({
    url: `/api/arenas/${router.params.arena_id}`,
    method: "DELETE",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open('../..'),
  }),
];
