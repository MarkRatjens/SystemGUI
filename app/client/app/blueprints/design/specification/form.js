app.blueprints.design.specification.form = (options={}) => app.jsonForm({
  url: `/api/blueprints/@${options.route.params.blueprintIdentifier}/specification`,
  ...options,
})
