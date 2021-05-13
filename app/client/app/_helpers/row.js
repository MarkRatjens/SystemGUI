app.row = (options) => (a,x) => a["div.row"](
  (options.columns || []).map((column) => a["div.col-sm"](column)),
  options.rowTag
),
