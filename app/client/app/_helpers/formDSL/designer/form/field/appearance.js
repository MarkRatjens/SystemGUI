app.formDSL.designer.form.field.appearance = (f) => [

  // LABEL
  f.fieldset( {
    body: [
      f.field( {
        key: 'label',
        horizontal: true,
        as: 'one',
        form: (ff) => [
          ff.field( {
            key: 'type',
            label: false,
            as: 'select',
            placeholder: 'Default',
            selections: {
              custom: 'Custom',
              none: 'None',
            }
          } ),
          ff.field( {
            key: 'custom',
            placeholder: 'Enter custom label',
            label: false,
            dependent: {
              key: 'type',
              value: 'custom'
            }
          } ),
        ],
      } ),

    ],
    dependent: {
      key: 'control',
      pattern: '^(?!hidden).+$',
    },
  } ),

  // HORIZONTAL
  f.field( {
    key: 'horizontal',
    as: 'checkbox',
    horizontal: true,
    dependent: {
      key: 'control',
      pattern: '^(?!hidden).+$',
    },
  } ),

  // HINT
  f.field( {
    key: 'hint',
    horizontal: true,
    dependent: {
      key: 'control',
      pattern: '^(?!hidden).+$',
    },
  } ),

  // PLACEHOLDER
  f.field( {
    key: 'placeholder',
    horizontal: true,
    dependent: {
      key: 'control',
      pattern: '^(?!(hidden|checkbox|checkboxes|radios|one|many|table|json)$).+',
    }
  } ),

  // CHECKBOX
  f.field( {
    key: 'checkbox',
    as: 'one',
    form: (ff) => [
      ff.row( { columns: [
        ff.field( {
          key: 'label',
          // vertical: true,
        } ),
        ff.field( {
          key: 'checked',
          // vertical: true,
        } ),
      ] } ),
    ],
    dependent: {
      key: 'control',
      value: 'checkbox',
    },
  } ),

  // CONFIRM
  f.fieldset( {
    label: false,
    body: [
      f.field( {
        key: 'confirm',
        as: 'checkbox',
        control: {
          label: 'Show secondary input',
        },
      } ),
      f.field( {
        key: 'confirmation',
        as: 'one',
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'placeholder',
          } ),
        ],
        dependent: {
          key: 'confirm',
          value: 'on',
        },
      } ),

    ],
    dependent: {
      key: 'control',
      value: 'password',
    },
  } ),

  // CODE
  f.field( {
    key: 'code',
    as: 'one',
    form: (ff) => [
      ff.field( {
        key: 'mode',
        as: 'select',
        selections: {
          '': '',
          shell: 'Shell',
          javascript: 'JavaScript',
          ruby: 'Ruby',
          python: 'Python',
          xml: 'XML',
          yaml: 'YAML',
        },
      } ),
    ],
    dependent: {
      key: 'control',
      value: 'code',
    },
  } ),

  f.fieldset({
    body: [
      app.placeholder('Nothing to configure'),
    ],
    dependent: {
      key: 'control',
      pattern: '^(hidden|)$',
    },
  })

]
