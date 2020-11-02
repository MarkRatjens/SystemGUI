app.environment = () => (a, x) =>
app.http({
  url: '/api/environment',
  placeholder: app.spinner('Loading environment'),
  success: (environment, el) => el.$nodes = a["app-environment"](
    app.router(),
    {
      id: 'environment',
      $state: environment
    }
  ),
})
