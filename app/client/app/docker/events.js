app.docker.events = () => a['app-docker-events']({
  $open: (el) => () => {
    el.$eventsource = new EventSource('/api/docker/events')
    el.$eventsource.addEventListener('output', (e) => {
      el.$event(e)
    })
    el.$eventsource.addEventListener('timeout', (e) => {
      // TODO: Docker may need reauthentication.
      // For now, log the timeout and reconnect.
      console.log('Docker timed out. Will reconnect automatically.')
      el.$reconnect()
    })
    el.$eventsource.addEventListener('eot', (e) => {
      el.$reconnect()
    })
    el.$eventsource.addEventListener('exception', (e) => {
      el.$nodes = app.exception(e.data)
    })
    el.$eventsource.onerror = (e) => el.$reconnect()
  },
  $stop: (el) => () => {
    el.$eventsource.close()
    delete el.$eventsource
  },
  $init: (el) => el.$open(),
  $exit: (el) => el.$stop(),
  $reconnect: (el) => () => {
    // Note that Firefox closes on error, whereas Chromium reconnects.
    if(el.$eventsource.readyState == EventSource.CLOSED) {
      delete el.$eventsource
      setTimeout(el.$open, 1000)
    }
  },
  $event: (el) => (e) => {
    let event = JSON.parse(e.data)
    el.$('^app-docker-dashboard').$receive(event)
  },
})
