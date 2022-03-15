app.formDSL.builder.navigation.navigation = ( options={} ) => {

  let components = (r) => ( options.components || [] ).map(
    ( componentSpec ) => app.formDSL.builder.navigation.component( r, componentSpec, options.params )
  )

  return cc.navigation( {
    navigation: components,
    params: options.params,
    object: options.object,
  } )

}
