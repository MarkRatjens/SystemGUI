app.blueprints.design.specification.repositories.edit = (route, specification) => app.blueprints.design.specification.form({
  route: route,
  object: specification,
  form: f => [
    f.field({
      key: 'repositories',
      as: 'many',
      singular: 'repository',
      addable: true,
      removeable: true,
      moveable: true,
      collection: true,
      form: f => [
        f.field({
          key: "url",
          label: 'URL',
          type: "url",
          required: true,
        }),
        f.field({
          key: 'key',
          horizontal: true,
          as: 'one',
          form: ff => [
            ff.field({
              key: "url",
              label: 'URL',
              type: "url",
              required: true,
            }),
            ff.field({
              key: "id",
              label: 'ID',
              pattern: "[a-fA-F0-9]+",
              invalid: 'Please enter a hexadecimal string using characters a-f, A-F and 0-9.',
              required: true,
            }),
          ]
        }),
      ],
    }),
  ],
  update: (form) => {
    if (form.repositories.length) {
      specification.repositories = form.repositories
    } else {
      delete specification.repositories
    };
    return {specification: specification};
  },
})
