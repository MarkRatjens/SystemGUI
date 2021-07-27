app.formDSL.designer.form.field.collection = (f) => [
  // COLLECTION SELECTION
  f.field( {
    key: 'collection',
    label: false,
    as: 'checkbox',
    // horizontal: true,
    control: { label: 'Collection' },
    dependent: {
      key: 'control',
      pattern: '^(?!(checkbox|checkboxes|hidden|radios|multiselect|one|many|table)$).+$',
    }
  } ),

  // COLLECTION DETAILS
  f.fieldset( {
    // label: 'Items',
    body: [
      f.field( {
        key: 'singular',
        hint: "singular inflection for an item, such as 'pet' when key is 'pets'",
      } ),
      f.row({
        columns: [
          f.field( {
            key: 'closed',
            as: 'checkbox',
            label: false,
            // vertical: true,
            control: { label: 'Closed' },
            hint: "items can't be added or removed",
          } ),
          f.field( {
            key: 'stationary',
            as: 'checkbox',
            label: false,
            // vertical: true,
            control: { label: 'Stationary' },
            hint: "items can't be rearranged",
          } ),
        ]
      })
    ],
    dependent: [
      {
        key: 'control',
        pattern: '^(many|table)$',
      },
      {
        key: 'collection',
      },
    ],
  } ),

  f.fieldset({
    body: [
      app.placeholder('Nothing to configure'),
    ],
    dependent: {
      key: 'control',
      pattern: '^(checkbox|checkboxes|hidden|radios|multiselect|one|many|table|)$',
    },
  }),

]
