app.universeLabel = (settings) => {
  let about = settings.about || {}
  let colors = settings.colors || {}
  return a.div([
    about.label ? a.h3(about.label) : '',
    about.explanation ? a.div(about.explanation) : '',
  ], {
    style: {
      color: colors.text || '#333333',
      backgroundColor: colors.background || '#CCCCCC',
      textAlign: 'center',
    }
  })
}
