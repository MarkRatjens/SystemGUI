app.disconnected = route => a.div([
  a.h3( "Disconnected" ),
  app.button({
    label: app.icon( "fas fa-sync-alt", "Reconnect" ),
    onclick: () => route.load( '/reconnect' )
  })
])
