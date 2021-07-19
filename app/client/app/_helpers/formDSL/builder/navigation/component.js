app.formDSL.builder.navigation.component = ( componentSpec, params ) => {

  if ( componentSpec.type == 'menu' ) {
    return app.formDSL.builder.navigation.menu( componentSpec.menu || {}, params )
  } else if ( componentSpec.type == 'button' ) {
    return app.formDSL.builder.navigation.button( componentSpec.button || {}, params )
  } else if ( componentSpec.type == 'row' ) {
    return app.formDSL.builder.navigation.row( componentSpec.row || {}, params )
  }

}
