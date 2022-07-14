app.docker.compositions.applications = (composition) =>
a['app-docker-compositions-applications']({
  $open: (el) => () => {
    el.style.display = 'block'
    el.$nodes = [
      a['small']('Applications'),
      a['div.border-top.mb-2']([
        app.fetch({
          url: `/api/resolutions`,
          query: {arena_identifier: composition.identifier},
          placeholder:  a['div.p-2']([app.spinner('Loading')]),
          success: (applications) => applications.length
          ? applications.map(application => {
            if (application.identifier[0] == '$') return ''
            return app.docker.compositions.applications.application(application)
          })
          : a['div.p-2']([
            app.placeholder('No applications')
          ]),
        }),
      ])
    ]
  },
  $close: (el) => () => {
    el.style.display = 'none'
  },
  style: {display: 'none'}
})
