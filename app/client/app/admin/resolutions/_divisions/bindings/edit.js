app.admin.resolutions.bindings.edit = (route, resolution) => (a,x) => {
  let binding = resolution.bindings[route.params.bindingIndex]

  if (Object.keys(binding.configuration).length) {
    return app.admin.resolutions.form({
      route: route,
      object: binding,
      form: (f) => [
        `${f.object.identifier} binding configuration`,
        f.field({
          key: 'type',
          as: 'hidden',
        }),
        f.field({
          key: 'identifier',
          as: 'hidden',
        }),
        f.field({
          key: 'target_identifier',
          as: 'hidden',
        }),
        f.field({
          key: 'configuration',
          label: false,
          as: 'one',
          form: (ff) => [
            Object.keys(ff.object).map((key) => ff.field({
              key: key,
              label: key,
              horizontal: true,
            })),
          ]
        })
      ],
      success: () => route.open('..'),
      update: (form) => {
        resolution.bindings[route.params.bindingIndex] = form
        return resolution;
      },
    })
  } else {
    return [
      `${binding.target_identifier} has no configuration parameters`,
      // a.br,
      // app.button({
      //   label: app.icon("fa fa-check", "Done"),
      //   onclick: () => route.open("../.."),
      // })
    ]
  }

}