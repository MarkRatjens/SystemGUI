app.float = (options) => (a, x) =>
  a["div.clearfix"]([
    a["div.float-left"](options.left || a._),
    a["div.float-right"](options.right || a._),
  ]);
