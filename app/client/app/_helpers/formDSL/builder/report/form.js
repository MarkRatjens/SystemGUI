app.formDSL.builder.report.form = ( r, formSpec, params ) => {

  return app.formDSL.builder.form.form( {
    components: formSpec.components || [],
    object: r.object,
    params: { ...params, ...r.object },
    cancel: false,
    submit: formSpec.submit,
  } )

}
