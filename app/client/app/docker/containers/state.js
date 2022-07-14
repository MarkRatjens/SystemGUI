app.docker.containers.state = (container) => a['app-docker-containers-state']({
  $state: container,
  $nodes: (el) => a.div([
    app.docker.containers.state.status(el.$state.status),
    app.docker.containers.state.oom(el.$state.oom),
    app.docker.containers.state.action(el.$state.action),
  ]),
  $reindex: (el) => (container) => {
    el.$('app-docker-containers-state-status').$update(container.status)
  },
  $restate: (el) => (container, action) => {
    el.$state.action = action
    el.$state.status = container.status
    el.$state.oom = container.oom
    el.$render()
  },
})
