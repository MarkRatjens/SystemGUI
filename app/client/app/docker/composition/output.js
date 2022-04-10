app.docker.composition.output = (composition) =>
a['app-docker-composition-output']({
  $open: (el) => (action) => {
    el.$nodes = a['div.m-1']([
      app.stream({
        label: `${composition.identifier} ${action}`,
        url: `/api/streaming/${composition.identifier}/${action}`,
        complete: (el) => {
          el.append(a['div.stream-message.background-info.mt-n2.p-1']('Complete'))
        }
      })
    ])
  }
})
