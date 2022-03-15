app.docker = (route) => a['app-docker']([
  app.fetch({
    url: '/api/docker/summary',
    placeholder: app.spinner('Loading docker'),
    success: (docker) => app.docker.dashboard(docker),
  }),
])
