app.blueprints.import.output = (route) => (a,x) => app.stream({
  label: 'Importing',
  url: `/api/publications/import/output?${x.lib.query.stringify(route.params)}`,
  route: route,
  begin: (el) => {
    el.$write('\nImport begin ', {color: 'green', bold: true})
    el.$write('with Git\n\n', {color: 'green'})
  },
  digest: (el, data) => {
    let message = JSON.parse(data)
    if ( message.output ) el.$write(message.output)
    if ( message.error ) {
      el.$errors++
      el.$write('Import error\n', {color: 'yellow', bold: true})
      el.$write(`${message.error}\n\n`, {color: 'yellow'})
    }
    if ( message.exception ) {
      el.$write('Import exception\n', {color: 'red', bold: true})
      el.$write(`${message.exception}\n\n`, {color: 'red'})
    }
  },
  complete: (el) => {
    if (el.$errors) {
      el.$write('Import complete ', {color: 'yellow', bold: true})
      el.$write(`${el.$errors} error${el.$errors != 1 ? 's' : ''}\n`, {color: 'yellow'})
    } else {
      el.$write('Import complete\n', {color: 'green', bold: true})
    }
    dashboardMenu.$render()
  },
})
