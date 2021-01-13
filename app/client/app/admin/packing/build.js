app.admin.packing.build = (router) => (a,x) => [
  a.h3(`Build?`),
  app.form({
    url: `/api/packing/${router.params.pack_id}/commit`,
    method: "POST",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open('..'),
  }),
];
