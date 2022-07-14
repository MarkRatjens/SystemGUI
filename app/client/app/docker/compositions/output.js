app.docker.compositions.output = (composition) =>
a['app-docker-compositions-output']({
  $open: (el) => (action) => {
    el.$nodes = a['div.m-1']([
      app.stream({
        label: `${composition.identifier} ${action}`,
        url: `/api/streaming/arenas/@${composition.identifier}/${action}`,
        complete: (el) => {
          el.append(a['div.app-stream-message.bordered-info.mt-n2.p-1']('Complete'))
        }
      })
    ])
  }
})
