app.stream = (options) => {

  let label = options.label || ''
  let listeners = options.url || console.error('Missing parameter: url')

  return a['app-stream']([
    app.xterm({label: label}),
    a['app-stream-eventsource']({
      $start: (el) => () => {
        el.$eventsource = new EventSource(options.url)
        el.$eventsource.addEventListener('output', (e) => {
          el.$digest(e.data)
        })
        el.$eventsource.addEventListener('exception', (e) => {
          el.$nodes = app.exception(e.data)
        })
        el.$eventsource.addEventListener('eot', (e) => {
          el.$complete()
        })
        el.$eventsource.timeout = (e) => {
          el.$send('app.timeout')
        }
        el.$eventsource.onerror = (e) => {
          el.$send('app.disconnected')
        }
      },
      $stop: (el) => () => {
        if (el.$eventsource) {
          el.$eventsource.close()
          delete el.$eventsource
        }
      },
      $digest: (el) => (raw) => {
        let data = JSON.parse(raw)
        if (data.output) el.$write(data.output)
        if (data.error) el.$write(`${data.error}`, {color: 'yellow'})
        if ( data.exception ) el.$write(`${data.exception}\n`, {color: 'red'})
      },
      $colors: {black: '30', red: '31', green: '32', yellow: '33', blue: '34', magenta: '35', cyan: '36', white: '37' },
      $write: (el) => (text, opts={}) => {
        let encoded = ['\u001b[', opts.bold ? '1' : '0', ';', el.$colors[opts.color], 'm', text, '\u001b[0m'].join('')
        el.previousSibling.$write(encoded)
      },
      $exit: (el) => el.$stop(),
      $complete: (el) => () => {
        el.$stop()
        if (options.complete) options.complete(el)
      },
    } ),
  ], {
    $on: {
      'ax.appkit.xtermjs.ready': (e, el) => {
        el.$('app-stream-eventsource').$start()
      },
    },
    $start: (el) => () => {
      el.$('app-stream-eventsource').$start()
    },
    $stop: (el) => () => {
      el.$('app-stream-eventsource').$stop()
    },
  })
}
