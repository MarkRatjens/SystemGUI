app.formDSL.builder.report.report = ( options={} ) => {

  let components = (r) => ( options.components || [] ).map(
    ( componentSpec ) => app.formDSL.builder.report.component( r, componentSpec, options.params )
  )

  return app.report( {
    report: components,
    params: options.params,
    object: options.object,
  } )

}
