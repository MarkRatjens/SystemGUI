app.admin.publications = (router) => router.mount({
  routes: {
    '/?': app.admin.publications.index,
    '/~new': app.admin.publications.new,
    '/:publication_id*': app.admin.publications.publication,
  }
})
