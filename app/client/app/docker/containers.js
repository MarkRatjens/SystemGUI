app.docker.containers = () => a['app-docker-containers']([
  a['app-docker-containers-placeholder.p-2']([
    app.placeholder('No containers')
  ], {
    style: {display: 'none'},
    $show: (el) => () => el.style.display = 'block',
    $hide: (el) => () => el.style.display = 'none',
  }),
  a['app-docker-containers-index'],
], {
  $reindex: (el) => (event) => {
    let found = []
    // console.log(el.$$('app-docker-container:not(.delete-fade-out)').$$.length)
    for (let container of event.payload) {
      let containerEl = el.$(`#docker-container-${container.identifier}`)
      if (containerEl) {
        found.push(containerEl)
        containerEl.$reindex(container)
      } else {
        el.$('app-docker-containers-placeholder').$hide()
        containerEl = app.docker.containers.container(container)
        found.push(containerEl)
        el.prepend(containerEl)
      }
    }
    for (let containerEl of el.$$('app-docker-containers-container:not(.delete-fade-out)')) {
      if (!found.includes(containerEl)) {
        containerEl.$nodes = []
        containerEl.remove()
      }
    }
    setTimeout(() => {
      if (el.$$('app-docker-containers-container:not(.delete-fade-out)').$$.length == 0) {
        el.$('app-docker-containers-placeholder').$show()
      }
    }, 500)
  },
})
