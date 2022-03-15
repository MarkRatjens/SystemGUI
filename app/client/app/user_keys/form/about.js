app.user_keys.form.about = (f) => [
  f.field({
    key: 'about',
    as: 'one',
    horizontal: false,
    form: (ff) => [
      ff.field({
        key: 'label',
      }),
      ff.field({
        key: 'explanation',
      }),
    ]
  }),
]
