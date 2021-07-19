app.formDSL.builder.report.report = ( options={} ) => (a,x) => {

  let components = (r) => ( options.components || [] ).map(
    ( componentSpec ) => app.formDSL.builder.report.component( r, componentSpec, options.params )
  )

  return cc.report( {
    report: components,
    params: options.params,
    object: options.object,
  } )

}