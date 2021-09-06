app.xterm = (options) => (a, x) =>
  x.xtermjs({
    terminal: { convertEol: true, fontSize: 16 },
    ...options,
  });
