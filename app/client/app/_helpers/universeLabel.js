app.universeLabel = (about) => a.div([
  about.label ? a.h3(about.label) : '',
  about.explanation ? a.div(about.explanation) : '',
], {
  style: {
    color: (about.color || {}).text || '#333333',
    backgroundColor: (about.color || {}).background || '#CCCCCC',
    textAlign: 'center',
  }
})
