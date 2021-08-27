app.keys.form.key = (f) => [
  f.field({
    key: 'domain',
    required: true,
  }),
  f.field({
    key: 'username',
    required: true,
  }),
  f.field({
    key: 'tie_breaker',
    label: 'Name',
    help: [
      '##### Name',
      'Enter a name when you have more than one key for a user and domain.',
      'The name is used to identify the key when multiple keys share ' +
      'the same username and domain combination.',
    ],
  }),
  f.field({
    key: 'explanation',
    help: [
      '##### Explanation',
      'Enter some text to help you remember what this key is for.'
    ],
  }),
]
