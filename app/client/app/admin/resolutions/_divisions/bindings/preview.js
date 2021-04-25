app.admin.resolutions.bindings.preview = (router, resolution) => (a,x) =>
resolution.bindings && resolution.bindings.length ?
resolution.bindings.map((binding, i) =>
  app.clickable(
    a['div.p-1.overflow-auto'](
      a.li([
        `${binding.identifier}`,
        Object.keys(binding.configuration).length ?
        x.out(binding.configuration, {placeholder: 'None'}) :
        a['div.placeholder']('No configuration'),
      ])
    ),
    () => router.open('binding', {binding_index: i})
  )
) : a._
