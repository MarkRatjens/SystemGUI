app.formDSL.designer.form.field.validation = (f) => [
  f.field( {
    key: 'validation',
    label: false,
    as: 'one',
    form: (ff) => [
      ff.field( {
        key: 'required',
        label: false,
        as: 'checkbox',
        control: {label: 'Required'},
      } ),
      ff.fieldset( {
        // vertical: true,
        label: false,
        body: ff.row( { columns: [
          ff.field( {
            key: 'min',
            as: 'input',
            type: 'number',
          } ),
          ff.field( {
            key: 'max',
            as: 'input',
            type: 'number',
          } ),
          ff.field( {
            key: 'step',
            as: 'input',
            type: 'number',
          } ),
        ] } ),
        dependent: {
          key: '[..]control',
          pattern: '^number$',
        },
      } ),
      ff.fieldset( {
        // vertical: true,
        label: false,
        body: ff.row( { columns: [
          ff.field( {
            key: 'minlength',
            label: 'Min length',
            as: 'input',
            type: 'number',
          } ),
          ff.field( {
            key: 'maxlength',
            label: 'Max length',
            as: 'input',
            type: 'number',
          } ),
        ] } ),
        dependent: {
          key: '[..]control',
          pattern: '^(string|password|combobox)$',
        },
      } ),
      ff.field( {
        key: 'pattern',
        horizontal: true,
        dependent: {
          key: '[..]control',
          pattern: '^(string|password|combobox)$',
        },
      } ),
      ff.field( {
        key: 'message',
        label: 'Invalid message',
        horizontal: true,
      } ),
    ],
    dependent: {
      key: 'control',
      pattern: '^(string|select|text|checkbox|checkboxes|radios|password|combobox|color|date|email|number|tel|time|url|code|markdown|country|language|timezone)$',
    },

  } ),

  f.fieldset({
    body: [
      app.placeholder('Nothing to configure'),
    ],
    dependent: {
      key: 'control',
      pattern: '^(hidden|multiselect|)$',
    },
  }),
]
