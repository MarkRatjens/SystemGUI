app.formDSL.builder = function( components, params={}, options={} ) {

  return ( components || [] ).map( ( componentSpec ) => {

    if ( componentSpec.type == 'template' ) {
      return app.formDSL.builder.template( componentSpec.template || {}, params )
    } else if ( componentSpec.type == 'form' ) {
      return app.formDSL.builder.form( componentSpec.form || {}, params, options )
    } else if ( componentSpec.type == 'report' ) {
      return app.formDSL.builder.report( componentSpec.report || {}, params, options )
    } else if ( componentSpec.type == 'output' ) {
      return app.formDSL.builder.output( componentSpec.output || {}, params, options )
    } else if ( componentSpec.type == 'navigation' ) {
      
      return app.formDSL.builder.navigation( componentSpec.navigation || {}, params, options )
    } else {
      return ''
    }

  } )

}
