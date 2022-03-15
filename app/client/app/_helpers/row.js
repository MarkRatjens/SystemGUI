app.row = (options) => a["div.row"](
  (options.columns || []).map((column) => a[`div.col-${options.size || 'lg'}.overflow-hidden`](column, options.columnTag || {})),
  options.rowTag || {}
)
