app.settings.reload = route => (a,x) => [
  app.spinner('Updating settings'),
  a({
    $init: () => location.assign('/'),
  })
]
