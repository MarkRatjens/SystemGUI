app.blueprints.design.export.output = (route) => (a,x) => app.stream({
  label: 'Exporting',
  url: `/api/publications/@${route.params.publicationIdentifier}/export/output`,
  route: route,
  begin: (el) => {
    el.$write('\nExport begin ', {color: 'green', bold: true})
    el.$write('with Git\n\n', {color: 'green'})
  },
  digest: (el, data) => {
    let message = JSON.parse(data)
    if ( message.output ) el.$write(message.output)
    if ( message.error ) {
      el.$errors++
      el.$write('Export error\n', {color: 'yellow', bold: true})
      el.$write(`${message.error}\n\n`, {color: 'yellow'})
    }
    if ( message.exception ) {
      el.$write('Export exception\n', {color: 'red', bold: true})
      el.$write(`${message.exception}\n\n`, {color: 'red'})
    }
  },
  complete: (el) => {
    if (el.$errors) {
      el.$write('Export complete ', {color: 'yellow', bold: true})
      el.$write(`${el.$errors} error${el.$errors != 1 ? 's' : ''}\n`, {color: 'yellow'})
    } else {
      el.$write('Export complete\n', {color: 'green', bold: true})
    }
    dashboardMenu.$render()
  },
})
