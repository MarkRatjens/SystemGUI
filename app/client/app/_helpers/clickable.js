app.clickable = (component, onclick, options={}) => a['app-clickable'](
  component,
  {
    $on: {click: onclick},
    ...options.clickableTag,
  }
)
