app.docker.containers.state.status = (status) =>
a['app-docker-containers-state-status']({
  $status: status,
  $nodes: (el) => app.docker.containers.state.label(el.$status),
  $update: (el) => (status) => el.$status = status,
})
