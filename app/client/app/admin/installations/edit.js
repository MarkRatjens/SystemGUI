app.admin.installations.edit = (route) => (a, x) => app.fetch({
  url: `/api/installations/${route.params.installationIdentifier}`,
  placeholder: app.spinner('Loading installation'),
  success: (installation, el) => {
    el.$nodes = a({
      $tag: 'app-installation',
      $state: installation,
      $nodes: (el, installation) => [
        a.h2('Edit'),
        a.hr,
        app.admin.installations.edit.body(route, installation),
      ],
    })
  },
})
