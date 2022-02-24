app.formDSL.builder.template = ( templateSpec, params ) => {

  try {
    return app.md( Mustache.render( templateSpec || '', params ) )
  } catch (e) {
    return a['.error']( e.message )
  }

}
