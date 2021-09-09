app.user_keys.form.issuer = (f) => (a,x) => [
  f.field({
    key: 'domain',
    required: true,
    label: 'Issuer',
    placeholder: 'Domain',
    help: [
      'Enter a domain and username for the issuer of the token.',
      'Also enter a epithet when you have more than one key for a user of a domain. ' +
      'The epithet is used to uniquely identify the user key when multiple user keys share ' +
      'the same username and domain combination.',
    ],
  }),
  f.fieldset({
    body: [
      f.row({
        columns: [
          f.field({
            key: 'username',
            horizontal: false,
            label: false,
            required: true,
            placeholder: 'Username'
          }),
          f.field({
            key: 'tie_breaker',
            horizontal: false,
            label: false,
            placeholder: 'Optional epithet'
          }),
        ]
      }),
    ],
  }),
]
