app.user_keys.form.token = (f) => [
  f.field({
    key: 'token',
    as: 'textarea',
    control: {
      textareaTag: {
        class: 'form-control text-monospace',
      },
    },
    required: true,
  }),
]
