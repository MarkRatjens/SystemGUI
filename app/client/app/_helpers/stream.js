app.stream = (options) => {

  let streamLabel = options.label.stream || ''
  let actionLabel = options.label.action || ''
  let toolLabel = options.label.tool || ''

  return a.div([
    app.xterm({label: streamLabel}),
    a['appkit-event-source']({
      $error: false,
      $start: (el) => () => {
        el.$begin()
        el.$eventsource = new EventSource(options.url)
        el.$eventsource.addEventListener('output', (e) => {
          el.$digest(e.data)
        })
        el.$eventsource.addEventListener('exception', (e) => {
          el.$nodes = [app.exception(e.data)]
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
        el.$write(`\n${actionLabel} begin `, {color: 'green', bold: true})
        el.$write(`with ${toolLabel}\n`, {color: 'green'})
      },
      $digest: (el) => (raw) => {
        let data = JSON.parse(raw)
        if (data.output) el.$write(data.output)
        if (data.error) {
          el.$error = true
          el.$write(`\n${actionLabel} error\n`, {color: 'yellow', bold: true})
          el.$write(`${data.error}\n`, {color: 'yellow'})
        }
        if ( data.exception ) {
          el.$write(`\n${actionLabel} exception\n`, {color: 'red', bold: true})
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
        if (el.$error) {
          el.$write(`${actionLabel} complete`, {color: 'yellow', bold: true})
          el.$write(' with errors\n', {color: 'yellow'})
        } else {
          el.$write(`${actionLabel} complete\n`, {color: 'green', bold: true})
        }

        el.$nodes = [
          ...el.$nodes,
          app.button({
            label: app.icon('fas fa-check', 'Done'),
            onclick: options.done,
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

}
