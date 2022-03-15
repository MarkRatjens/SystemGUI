app.docker.container.state.status = (status) =>
a['app.docker.container.state.status']({
  $status: status,
  $nodes: (el) => app.docker.container.state.label(el.$status),
  $update: (el) => (status) => el.$status = status,
})
