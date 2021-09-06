app.stream = (options) => (a,x) => a.div([
  app.xterm({label: options.label}),
  a['appkit-event-source']( null, {
    $errors: 0,
    $start: (el) => () => {
      if (options.begin) options.begin(el)
      el.$eventsource = new EventSource(options.url)
      el.$eventsource.addEventListener('output', (e) => {
        if (options.digest) options.digest(el, e.data)
      })
      el.$eventsource.addEventListener('exception', (e) => {
        el.$nodes = [app.exception(e.data), el.$nodes]
      })
      el.$eventsource.addEventListener('eot', (e) => {
        el.$complete()
      })
      el.$eventsource.onerror = (e) => {
        // Timeout to stop error when eventstream exits on new page load.
        setTimeout( () => {
          console.error( `${options.label} stream ${el.$started} - Unexpected error.` )
          el.$eventsource && el.$eventsource.close()
        }, 1000 )

      }
    },
    $colors: {black: '30', red: '31', green: '32', yellow: '33', blue: '34', magenta: '35', cyan: '36', white: '37' },
    $write: (el) => (text, opts={}) => {
      let encoded = ['\033[', opts.bold ? '1' : '0', ';', el.$colors[opts.color], 'm', text, '\033[0m'].join('')
      el.previousSibling.$write(encoded)
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
          onclick: () => options.route.open('..'),
          class: 'btn btn-primary',
        }),
      ]
      if (options.complete) options.complete(el)
    },
  } ),
], {
  $on: {
    'ax.appkit.xtermjs.ready': (e, el) => {
      el.$('appkit-event-source').$start()
    },
  }
})
