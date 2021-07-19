app.admin.installations.bindings.preview = (route, installation) => (a,x) =>
installation.bindings && installation.bindings.length ?
installation.bindings.map((binding, i) =>
  app.clickable(
    a['div.p-1.overflow-auto'](
      a.li([
        `${binding.identifier}`,
        Object.keys(binding.configuration).length ?
        x.out(binding.configuration, {placeholder: 'None'}) :
        a['div.placeholder']('No configuration'),
      ])
    ),
    () => route.open('binding', {bindingIndex: i})
  )
) : a._
