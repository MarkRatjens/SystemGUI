app.formDSL.builder.form.fieldset = ( f, fieldsetSpec, params ) => {

  if ( fieldsetSpec.components ) {
    let componentsSpec = fieldsetSpec.components || []
    let result = []
    for ( let i in componentsSpec ) {
      result.push( app.formDSL.builder.form.component( f, componentsSpec[i] ) )
    }
    fieldsetSpec.body = result
  }

  if ( fieldsetSpec.dependent ) {
    let dependentsSpec = fieldsetSpec.dependent || []
    fieldsetSpec.dependent = dependentsSpec.map((dependentSpec) => ({
      key: dependentSpec.target,
      pattern: dependentSpec.pattern
    }))
  }

  if ( !fieldsetSpec.label ) fieldsetSpec.label = false

  return f.fieldset( fieldsetSpec )

}
