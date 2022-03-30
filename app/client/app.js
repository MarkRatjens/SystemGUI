let app = () => a['app']([
  app.modal(),
  app.fetch({
    url: '/api/settings',
    success: (settings) => {
      loadingSpinner.style.opacity = 0
      setTimeout(() => loadingSpinner.remove(), 1000)
      app.universe.settings = settings
      return app.router()
    },
  }),
])
