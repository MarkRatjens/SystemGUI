app.blueprints.design.specification.otherPackages.form =
(f) => [
  f.field({
    key: 'target',
    as: 'one',
    label: false,
    // horizontal: true,
    form: (ff) => [
      ff.field({
        key: 'repository',
        type: 'url',
        required: true,
      }),
      ff.field({
        key: 'branch',
      }),
      ff.field({
        key: 'identifier',
      }),
    ],
  }),
  f.field({
    key: 'extraction',
  }),
  f.field({
    key: 'extracted_path',
  }),
  f.field({
    key: 'destination',
  }),
]
