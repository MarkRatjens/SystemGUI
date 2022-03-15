app.xterm = (options) => 
  x.xtermjs({
    terminal: { convertEol: true, fontSize: 16 },
    ...options,
  });
