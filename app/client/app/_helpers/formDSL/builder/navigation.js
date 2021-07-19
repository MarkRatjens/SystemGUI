app.formDSL.builder.navigation = ( navigationSpec, params ) => {

  let components = navigationSpec.components || []

  return ( components || [] ).map( ( componentSpec ) => {
    return app.formDSL.builder.navigation.component( componentSpec, params )
  } )

}
