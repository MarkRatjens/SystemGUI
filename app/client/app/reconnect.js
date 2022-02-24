app.reconnect = route => a.div([
  a.h3( "Reconnect" ),
  app.polling(
    '/api/arenas/list',
    ( result, el ) => location.assign(location)
  )
])
