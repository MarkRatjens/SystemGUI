app.formDSL.builder.form.component = ( f, componentSpec, params ) => {

  if ( componentSpec.type == 'field' ) {
    return app.formDSL.builder.form.field( f, componentSpec.field, params )
  } else if ( componentSpec.type == 'fieldset' ) {
    return app.formDSL.builder.form.fieldset( f, componentSpec.fieldset, params )
  } else if ( componentSpec.type == 'row' ) {
    return app.formDSL.builder.form.row( f, componentSpec.row, params )
  } else if ( componentSpec.type == 'template' ) {
    return app.formDSL.builder.form.template( f, componentSpec.template, params )
  }

}
