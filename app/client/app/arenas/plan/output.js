app.arenas.plan.output = (route) => (a,x) => app.stream({
  label: 'Planning',
  url: `/api/arenas/@${route.params.arenaIdentifier}/plan/output`,
  route: route,
  begin: (el) => {
    el.$write('\nPlan begin ', {color: 'green', bold: true})
    el.$write('with Terraform\n\n', {color: 'green'})
  },
  digest: (el, data) => {
    let message = JSON.parse(data)
    if ( message.output ) el.$write(message.output)
    if ( message.error ) {
      el.$errors++
      el.$write('\nPlan error\n', {color: 'yellow', bold: true})
      el.$write(`${message.error}\n`, {color: 'yellow'})
    }
    if ( message.exception ) {
      el.$write('\nPlan exception\n', {color: 'red', bold: true})
      el.$write(`${message.exception}\n`, {color: 'red'})
    }
  },
  complete: (el) => {
    if (el.$errors) {
      el.$write('\nPlan complete ', {color: 'yellow', bold: true})
      el.$write(`${el.$errors} error${el.$errors != 1 ? 's' : ''}\n`, {color: 'yellow'})
    } else {
      el.$write('\nPlan complete\n', {color: 'green', bold: true})
    }
    dashboardMenu.$render()
  },
})
