app.formDSL.designer.form.field.value = (f) => a['app-form-field-control']([

  // DEFAULT VALUE
  f.field( {
    key: 'value',
    label: 'Default value',
    horizontal: true,
    dependent: {
      key: 'control',
      pattern: '^(?!(one|many|table)$).*$',
    }
  } ),

  // SELECTIONS
  f.field( {
    key: 'selections',
    as: 'one',
    form: (ff) => [
      ff.field( {
        key: 'type',
        label: false,
        as: 'select',
        placeholder: 'None',
        selections: { static: 'Static', dynamic: 'Dynamic' },
      } ),
      ff.field( {
        key: 'static',
        label: false,
        as: 'table',
        singular: 'selection',
        collection: true,
        addable: true,
        removeable: true,
        moveable: true,
        form: (ff) => [
          ff.field( { key: 'value' } ),
          ff.field( { key: 'label' } ),
        ],
        dependent: {
          key: 'type',
          value: 'static',
        }
      } ),
      ff.field( {
        key: 'dig',
        hint: `dot-separated keys, such as 'account.profiles'`,
        dependent: {
          key: 'type',
          pattern: '^dynamic$',
        }
      } ),
    ],
    dependent: {
      key: 'control',
      pattern: '^(select|radios|checkboxes|multiselect|combobox)$',
    }
  } ),

  // DATALIST
  f.field( {
    key: 'datalist',
    as: 'one',
    dependent: {
      key: 'control',
      pattern: '^(string|number|url|email|color|date|tel|time|)$',
    },
    form: ff => [
      ff.field( {
        key: 'type',
        label: false,
        as: 'select',
        placeholder: 'None',
        selections: { static: 'Static', dynamic: 'Dynamic' },
      } ),
      ff.field( {
        key: 'static',
        label: false,
        collection: true,
        addable: true,
        removeable: true,
        moveable: true,
        singular: 'selection',
        dependent: {
          key: 'type',
          pattern: '^static$',
        }
      } ),
      ff.field( {
        key: 'dig',
        hint: `dot-separated keys, such as 'account.profiles'`,
        dependent: {
          key: 'type',
          pattern: '^dynamic$',
        }
      } ),
    ]
  } ),

  f.fieldset({
    body: app.placeholder('Nothing to configure'),
    dependent: {
      key: 'control',
      pattern: '^(one|many|table)$',
    },
  }),

])
