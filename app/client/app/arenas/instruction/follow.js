app.arenas.instruction.follow = (route) => (a,x) => a.div([
  app.xterm({label: 'Initializing'}),
  a['appkit-event-source']( null, {
    $init: (el) => {
      el.$eventsource = new EventSource( `/api/arenas/@${route.params.arenaIdentifier}/instruction?instruction=${route.params.instruction}` )
      el.$eventsource.onmessage = function(e) {
        let line = e.data
        if ( line == String.fromCharCode(4) ) el.$complete()
        if ( line ) el.previousSibling.$write( `${ line }\n` )
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
