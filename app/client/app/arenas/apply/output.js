app.arenas.apply.output = (route) => (a,x) => app.stream({
  label: 'Applying',
  url: `/api/arenas/@${route.params.arenaIdentifier}/apply/output`,
  route: route,
  begin: (el) => {
    el.$write('\nApply begin ', {color: 'green', bold: true})
    el.$write('with Terraform\n\n', {color: 'green'})
  },
  digest: (el, data) => {
    let message = JSON.parse(data)
    if ( message.output ) el.$write(message.output)
    if ( message.error ) {
      el.$errors++
      el.$write('\nApply error\n', {color: 'yellow', bold: true})
      el.$write(`${message.error}\n`, {color: 'yellow'})
    }
    if ( message.exception ) {
      el.$write('\nApply exception\n', {color: 'red', bold: true})
      el.$write(`${message.exception}\n`, {color: 'red'})
    }
  },
  complete: (el) => {
    if (el.$errors) {
      el.$write('\nApply complete ', {color: 'yellow', bold: true})
      el.$write(`${el.$errors} error${el.$errors != 1 ? 's' : ''}\n`, {color: 'yellow'})
    } else {
      el.$write('\nApply complete\n', {color: 'green', bold: true})
    }
    dashboardMenu.$render()
  },
})
