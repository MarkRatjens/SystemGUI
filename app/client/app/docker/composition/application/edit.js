app.docker.composition.application.edit = (application) =>
a['app-docker-composition-application-edit']({
  $open: (el) => () => {
    el.style.display = 'block'
    el.$nodes = a['div.mt-1']([
      app.fetch({
        url: `/api/resolutions/@${application.identifier}`,
        placeholder: a['div.p-2']([app.spinner('Loading')]),
        success: (resolution) => app.docker.composition.application.form(resolution)
      }),
    ])
  },
  $close: (el) => () => {
    el.$nodes = []
    el.style.display = 'none'
  },
  style: {display: 'none'}
})
