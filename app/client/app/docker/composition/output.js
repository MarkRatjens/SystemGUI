app.docker.composition.output = (composition) =>
a['app-docker-composition-output']({
  $open: (el) => (action) => {
    el.$nodes = a['div.p-1']([
      app.stream({
        label: `${composition.identifier} ${action}`,
        url: `/api/streaming/arenas/${action}`,
        complete: (el) => {
          el.append(a['pre.info.p-1.m-0']('Complete'))
        }
      })
    ])
  }
})
