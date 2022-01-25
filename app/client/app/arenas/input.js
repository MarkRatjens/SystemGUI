app.arenas.input = (route, installations, blueprints, forms) => (a,x) => {
  let components = []
  let object = {}

  let field = (f, form) => app.formDSL.builder.form.component(f, {
    type: 'field',
    field: {
      key: form.blueprint_identifier,
      label: {type: 'none'},
      control: 'one',
      components: form.components,
    },
  })

  let fieldset = (f ,form, blueprint) => [
    app.blueprintLabel(blueprint),
    (form.components || []).length === 0 ?
    a.p(app.placeholder('Nothing to configure')) :
    field(f, form),
  ]

  installations.map((installation) => {
    let input = installation.input
    let blueprint_identifier = installation.blueprint_identifier
    let blueprint = blueprints.find(blueprint => blueprint.identifier == blueprint_identifier)
    let form = forms.find(form => form.blueprint_identifier == blueprint_identifier)
    let component = f => a.p(fieldset(f, form, blueprint), {class: 'well'})
    object[blueprint_identifier] = input
    components.push(component)
  })

  return app.jsonForm({
    form: (f) => a.fieldset(components.map(component => component(f)), {disabled: 'disabled'})
  })

}
