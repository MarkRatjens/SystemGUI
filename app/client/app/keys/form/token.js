app.keys.form.token = (f) => [
  f.field({
    key: 'token',
    as: 'textarea',
    horizontal: false,
    control: {
      textareaTag: {
        class: 'form-control text-monospace',
      },
    },
    required: true,
  }),
]
