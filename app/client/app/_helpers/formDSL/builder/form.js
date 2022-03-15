app.formDSL.builder.form = ( formSpec, params, options={} ) => {

  return app.formDSL.builder.form.form( {
    components: formSpec.components || [],
    object: params,
    params: params,
    cancel: formSpec.cancel,
    submit: formSpec.submit,
    ...options,
  } )

}
