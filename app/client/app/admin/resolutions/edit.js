app.admin.resolutions.edit = (router) => (a, x) => app.fetch({
  url: `/api/resolutions/${router.params.resolutionIdentifier}`,
  placeholder: app.spinner('Loading resolution'),
  success: (resolution, el) => {
    el.$nodes = a({
      $tag: 'app-resolution',
      $state: resolution,
      $nodes: (el, resolution) => [
        a.h2('Edit'),
        a.hr,
        app.admin.resolutions.edit.body(router, resolution),
      ],
    })
  },
})
