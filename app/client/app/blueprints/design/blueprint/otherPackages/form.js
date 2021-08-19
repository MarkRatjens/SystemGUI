app.blueprints.design.blueprint.otherPackages.form =
(f) => [
  f.field({
    key: 'target',
    as: 'one',
    label: false,
    form: (ff) => [
      ff.field({
        key: 'repository',
        type: 'url',
        required: true,
        horizontal: true,
      }),
      ff.field({
        key: 'branch',
        horizontal: true,
      }),
      ff.field({
        key: 'identifier',
        horizontal: true,
      }),
    ],
  }),
  f.field({
    key: 'extraction',
    horizontal: true,
  }),
  f.field({
    key: 'extracted_path',
    horizontal: true,
  }),
  f.field({
    key: 'destination',
    horizontal: true,
  }),
]
