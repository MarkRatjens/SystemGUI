app.arenas.installation.build.follow = (route) => (a,x) => [
  app.xterm({label: 'Building'}),
  a['appkit-event-source']( null, {
    $init: (el) => {
      el.$eventsource = new EventSource( `/api/packs/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/build/follow` )
      el.$eventsource.onmessage = function(e) {
        let message = JSON.parse(e.data)
        if ( message.eot ) {
          el.$complete()
          return
        }
        if ( message.log ) el.previousSibling.$write( `${ message.log }` )
        if ( message.exception ) {
          el.$complete()
          el.$nodes = [
            app.exception(message.exception),
            el.$nodes
          ]
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
        app.button({
          label: app.icon('fas fa-check', 'Done'),
          onclick: () => route.open('../..'),
          class: 'btn btn-primary',
        }),
      ]
    },
  } ),
]
