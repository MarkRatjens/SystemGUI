app.formDSL.builder.report = ( reportSpec, params ) => {

  return app.formDSL.builder.report.report( {
    components: reportSpec.components || [],
    object: params,
    params: params,
    back: reportSpec.back,
    close: reportSpec.close,
  } )

}
