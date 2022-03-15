app.docker.container.state = (container) => a['app-docker-container-state']({
  $state: container,
  $nodes: (el) => a.div([
    app.docker.container.state.status(el.$state.status),
    app.docker.container.state.oom(el.$state.oom),
    app.docker.container.state.action(el.$state.action),
  ]),
  $reindex: (el) => (container) => {
    el.$('app.docker.container.state.status').$update(container.status)
  },
  $restate: (el) => (container, action) => {
    el.$state.action = action
    el.$state.status = container.status
    el.$state.oom = container.oom
    el.$render()
  },
})
