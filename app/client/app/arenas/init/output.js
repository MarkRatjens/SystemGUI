app.arenas.init.output = (route) => (a,x) => app.stream({
  label: 'Initializing',
  url: `/api/arenas/@${route.params.arenaIdentifier}/init/output`,
  route: route,
  begin: (el) => {
    el.$write('\nInitialize begin ', {color: 'green', bold: true})
    el.$write('with Terraform\n\n', {color: 'green'})
  },
  digest: (el, data) => {
    let message = JSON.parse(data)
    if ( message.output ) el.$write(message.output)
    if ( message.error ) {
      el.$errors++
      el.$write('\nInitialize error\n', {color: 'yellow', bold: true})
      el.$write(`${message.error}\n`, {color: 'yellow'})
    }
    if ( message.exception ) {
      el.$write('\nInitialize exception\n', {color: 'red', bold: true})
      el.$write(`${message.exception}\n`, {color: 'red'})
    }
  },
  complete: (el) => {
    if (el.$errors) {
      el.$write('\nInitialize complete ', {color: 'yellow', bold: true})
      el.$write(`${el.$errors} error${el.$errors != 1 ? 's' : ''}\n`, {color: 'yellow'})
    } else {
      el.$write('\nInitialize complete\n', {color: 'green', bold: true})
    }
    dashboardMenu.$render()
  },
})
