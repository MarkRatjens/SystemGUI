app.universeLabel = (about) => (a,x) => a.div([
  about.label ? a.h3(about.label) : null,
  about.explanation ? a.p(about.explanation) : null,
], {
  style: {
    color: (about.color || {}).text || '#333333',
    backgroundColor: (about.color || {}).background || '#CCCCCC',
    textAlign: 'center',
  }
})
