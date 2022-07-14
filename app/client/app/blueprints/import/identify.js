app.blueprints.import.identify = (route) => app.fetch({
  url: '/api/publications/identify',
  query: {model: route.query.model},
  placeholder: app.spinner('Identifying'),
  success: (identifier) => route.load('output', {identifier: identifier, timestamp: route.query.timestamp})
})
