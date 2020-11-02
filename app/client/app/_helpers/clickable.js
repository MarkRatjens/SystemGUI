app.clickable = (component, onclick, options={}) => (a, x) => a['app-clickable'](
  component,
  {
    $on: {click: onclick},
    ...options.clickableTag,
  }
)
