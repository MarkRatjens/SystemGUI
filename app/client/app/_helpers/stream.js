app.stream = (options) => (a,x) => a.div([
  app.xterm({label: options.label[0]}),
  a['appkit-event-source']( null, {
    $errors: 0,
    $start: (el) => () => {
      el.$begin()
      el.$eventsource = new EventSource(options.url)
      el.$eventsource.addEventListener('output', (e) => {
        el.$digest(e.data)
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
    $begin: (el) => () => {
      el.$write(`\n${options.label[1]} begin `, {color: 'green', bold: true})
      el.$write(`with ${options.label[2]}\n\n`, {color: 'green'})
    },
    $digest: (el) => (raw) => {
      let data = JSON.parse(raw)
      if (data.message) {
        let message = JSON.parse(data.message)
        let keys = options.keys || {}
        let output = message[keys.output || 'output']
        let error = message[keys.error || 'error']
        if ( output ) el.$write(output)
        if ( error ) {
          el.$errors++
          el.$write(`${options.label[1]} error\n`, {color: 'yellow', bold: true})
          el.$write(`${error}\n`, {color: 'yellow'})
        }
      }
      if ( data.exception ) {
        el.$write(`${options.label[1]} exception\n`, {color: 'red', bold: true})
        el.$write(`${data.exception}\n`, {color: 'red'})
      }
    },
    $colors: {black: '30', red: '31', green: '32', yellow: '33', blue: '34', magenta: '35', cyan: '36', white: '37' },
    $write: (el) => (text, opts={}) => {
      let encoded = ['\u001b[', opts.bold ? '1' : '0', ';', el.$colors[opts.color], 'm', text, '\u001b[0m'].join('')
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
      if (el.$errors) {
        el.$write(`${options.label[1]} complete `, {color: 'yellow', bold: true})
        el.$write(`${el.$errors} error${el.$errors != 1 ? 's' : ''}\n`, {color: 'yellow'})
      } else {
        el.$write(`${options.label[1]} complete\n`, {color: 'green', bold: true})
      }
      el.$nodes = [
        el.$nodes,
        app.button({
          label: app.icon('fas fa-check', 'Done'),
          onclick: () => options.route.open('.'),
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
