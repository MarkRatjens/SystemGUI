app.formDSL.builder.form.form = ( options={} ) => (a,x) => {

  let components = (f) => ( options.components || [] ).map(
    ( componentSpec ) => app.formDSL.builder.form.component( f, componentSpec, options.params )
  )

  let submit = {}
  let cancel = {}

  if ( options.cancel === false ) {
    cancel = false
  } else {

    let cancelSpec = options.cancel || {}

    if( cancelSpec.style === 'none' ) {
      cancel.style = ''
    } else if ( !cancelSpec.style ) {
      // Show default style
      cancel.style = 'secondary'
    }

    if( cancelSpec.icon === 'none' ) {
      cancel.icon = ''
    } else if ( !cancelSpec.icon ) {
      // Show default icon
      cancel.icon = 'times'
    } else {
      cancel.icon = cancelSpec.icon
    }

    let labelSpec = cancelSpec.label || {}

    if( labelSpec.display === 'none' ) {
      cancel.label = ''
    } else if ( labelSpec.display === 'custom' ) {
      cancel.label = Mustache.render( labelSpec.custom, options.params )
    } else {
      cancel.label = 'Cancel'
    }

    cancel.onclick = cancelSpec.onclick || ((e,el) => {
      options.route && options.route.open('..');
    })

  }

  if ( options.submit === false ) {
    submit = false
  } else {
    let submitSpec = options.submit || {}

    if( submitSpec.style === 'none' ) {
      submit.style = ''
    } else if ( !submitSpec.style ) {
      // Show default style
      submit.style = 'primary'
    }

    if ( submitSpec.icon === 'none' ) {
      submit.icon = ''
    } else if ( !submitSpec.icon ) {
      // Show default icon
      submit.icon = 'check'
    } else {
      submit.icon = submitSpec.icon
    }

    let labelSpec = submitSpec.label || {}

    if( labelSpec.display === 'none' ) {
      submit.label = ''
    } else if ( labelSpec.display === 'custom' ) {
      submit.label = Mustache.render( labelSpec.custom, options.params )
    } else {
      submit.label = 'Submit'
    }

  }

  let formFn = (f) => [
    ...components(f),
    a.div(
      f.buttons( {
        cancel: app.formDSL.builder.navigation.button.options( cancel ),
        submit: app.formDSL.builder.navigation.button.options( submit ),
      } )
    ),
  ]

  let asyncformTag = {
    $catch: (e) => a['p.error'](`Failed to render form.`),
  }

  return app.jsonForm( {
    form: formFn,
    buttonless: true,
    asyncformTag: asyncformTag,
    ...options,
  } )

}
