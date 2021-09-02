app.stream = (options) => (a,x) => a.div([
  app.xterm({label: options.label}),
  a['appkit-event-source']( null, {
    $init: (el) => {
      el.$eventsource = new EventSource(options.url)
      el.$eventsource.onmessage = function(e) {
        let message = JSON.parse(e.data)
        if ( message.eot ) {
          el.$complete()
          return
        }
        if ( message.log ) el.previousSibling.$write( `${ message.log }` )
        if ( message.exception ) el.$nodes = [app.exception(message.exception), el.$nodes]
      }
      el.$eventsource.onerror = (e) => {
        // Timeout to stop error when eventstream exits on new page load.
        setTimeout( () => {
          console.error( `${options.label} stream ${el.$started} - Unexpected error.` )
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
        el.$nodes,
        app.button({
          label: app.icon('fas fa-check', 'Done'),
          onclick: options.redirect,
          class: 'btn btn-primary',
        }),
      ]
      if (options.complete) options.complete()
    },
  } ),
])
