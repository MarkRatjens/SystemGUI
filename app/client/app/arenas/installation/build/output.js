app.arenas.installation.build.output = (route) => (a,x) => app.stream({
  label: 'Building',
  url: `/api/packs/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/build/output`,
  route: route,
  begin: (el) => {
    el.$write('\nBuild begin ', {color: 'green', bold: true})
    el.$write('with Docker\n\n', {color: 'green'})
  },
  digest: (el, data) => {
    let message = JSON.parse(data)
    if ( message.stream ) el.$write(message.stream)
    if ( message.error ) {
      el.$errors++
      el.$write('\nBuild error\n', {color: 'yellow', bold: true})
      el.$write(`${message.error}\n`, {color: 'yellow'})
    }
    if ( message.exception ) {
      el.$write('\nBuild exception\n', {color: 'red', bold: true})
      el.$write(`${message.exception}\n`, {color: 'red'})
    }
  },
  complete: (el) => {
    if (el.$errors) {
      el.$write('\nBuild complete ', {color: 'yellow', bold: true})
      el.$write(`${el.$errors} error${el.$errors != 1 ? 's' : ''}\n`, {color: 'yellow'})
    } else {
      el.$write('\nBuild complete\n', {color: 'green', bold: true})
    }
  },
})
