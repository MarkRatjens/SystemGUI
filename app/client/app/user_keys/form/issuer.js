app.user_keys.form.issuer = (f) => [
  f.field({
    key: 'domain',
    required: true,
    label: 'Issuer',
    placeholder: 'Domain',
    help: [
      'Enter a domain for the issuer of the token and a username.',
      'Also enter an identifier when you have more than one key for a user of a domain. ' +
      'The identifier is used to uniquely identify the user key when multiple user keys share ' +
      'the same username and domain combination.',
    ],
  }),
  f.fieldset({
    body: f.row({
      columns: [
        f.field({
          key: 'username',
          horizontal: false,
          label: false,
          required: true,
          placeholder: 'Username or Key ID'
        }),
        f.field({
          key: 'tie_breaker',
          horizontal: false,
          label: false,
          placeholder: 'Optional identifier'
        }),
      ]
    }),
  }),
]
