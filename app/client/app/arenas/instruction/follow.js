app.arenas.instruction.follow = (route) => (a,x) => a.div([
  app.xterm({label: {
    init: 'Initializing',
    plan: 'Planning',
    apply: 'Applying',
  }[route.params.command]}),
  a['appkit-event-source']( null, {
    $init: (el) => {
      el.$eventsource = new EventSource( `/api/arenas/@${route.params.arenaIdentifier}/instruction?command=${route.params.command}` )
      el.$eventsource.onmessage = function(e) {
        let message = JSON.parse(e.data)
        if ( message.eot ) {
          el.$complete()
          return
        }
        if ( message.log ) el.previousSibling.$write( `${ message.log }` )
        if ( message.exception ) {
          el.$complete()
          el.previousSibling.$nodes = app.exception(message.exception)
          return
        }
      }
      el.$eventsource.onerror = function(e) {
        // Timeout to stop error when eventstream exits on new page load.
        setTimeout( () => {
          console.error( `Builder log events stream ${ el.$started } - Unexpected error.` )
          el.$eventsource.close()
        }, 1000 )

      }
    },
    $exit: (el) => {
      if (el.$eventsource) {
        el.$eventsource.close()
        delete el.$eventsource
      }
    },
    $complete: (el) => () => {
      el.$eventsource.close()
      delete el.$eventsource
      el.$nodes = [
        a.br,
        app.button({
          label: app.icon('fas fa-check', 'Done'),
          onclick: () => route.open('../..'),
          class: 'btn btn-primary',
        }),
      ]
    },
  } ),
])
