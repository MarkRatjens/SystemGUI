app.user_keys.form.about = (f) => [
  f.field({
    key: 'about',
    as: 'one',
    form: (ff) => [
      ff.field({
        key: 'label',
        horizontal: false,
        label: false,
        placeholder: 'Optional label',
      }),
      ff.field({
        key: 'explanation',
        horizontal: false,
        label: false,
        placeholder: 'Optional explanation',
      }),
    ]
  }),
]
