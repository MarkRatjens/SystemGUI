app.applications.application = (router) => (a, x) => [
  app.close(() => router.open('..')),
  a.h1([
    a.img(null, {src: `/icons/${router.params.application_id}`, height: 48, width: 48}),
    ' ',
    router.params.application_id
  ]),
  router.mount({
    routes: {
      "/?": app.applications.show,
      "/blueprint*": app.applications.blueprint,
      "/resolution*": app.applications.resolution,
      "/~delete": app.applications.delete,
    }
  }),
];
