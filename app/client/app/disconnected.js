app.disconnected = route => (a,x) => [
  a.h3( "Disconnected" ),
  app.button({
    label: app.icon( "fas fa-sync-alt", "Reconnect" ),
    onclick: (el) => () => route.load( '/reconnect' )
  })
]
