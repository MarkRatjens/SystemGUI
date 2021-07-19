app.formDSL.builder.report.component = ( r, componentSpec, params ) => {

  if ( componentSpec.type == 'field' ) {
    return app.formDSL.builder.report.field( r, componentSpec.field, params )
  } else if ( componentSpec.type == 'fieldset' ) {
    return app.formDSL.builder.report.fieldset( r, componentSpec.fieldset, params )
  } else if ( componentSpec.type == 'row' ) {
    return app.formDSL.builder.report.row( r, componentSpec.row, params )
  } else if ( componentSpec.type == 'template' ) {
    return app.formDSL.builder.report.template( r, componentSpec.template, params )
  } else if ( componentSpec.type == 'form' ) {
    return app.formDSL.builder.report.form( r, componentSpec.form, params )
  } else if ( componentSpec.type == 'navigation' ) {
    return app.formDSL.builder.navigation( componentSpec.navigation, { ...params, ...r.object } )
  } else {
    return null
  }

}
