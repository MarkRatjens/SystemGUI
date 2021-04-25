app.admin.resolutions.bindings.edit = (router, resolution) => (a,x) => {
  let binding = resolution.bindings[router.params.binding_index]

  if (Object.keys(binding.configuration).length) {
    return app.admin.resolutions.form({
      router: router,
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
      close: '..',
      update: (form) => {
        resolution.bindings[router.params.binding_id] = form
        return resolution;
      },
    })
  } else {
    return [
      `${binding.target_identifier} has no configuration parameters`,
      // a.br,
      // app.button({
      //   label: app.icon("fa fa-check", "Done"),
      //   onclick: () => router.open("../.."),
      // })
    ]
  }

}
