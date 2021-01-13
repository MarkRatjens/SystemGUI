app.admin.packing.delete = (router) => (a,x) => [
  a.h3(`Delete?`),
  app.form({
    url: `/api/packing/${router.params.pack_id}`,
    method: "DELETE",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open('../..'),
  }),
];
