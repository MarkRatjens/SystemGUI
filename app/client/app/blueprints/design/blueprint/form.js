app.blueprints.design.blueprint.form = (options={}) => app.jsonForm({
  url: `/api/blueprints/@${options.route.params.blueprintIdentifier}`,
  ...options,
})
