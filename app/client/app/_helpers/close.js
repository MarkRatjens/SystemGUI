app.close = (route, path='..') => (a, x) =>
  a["div.float-right"](
    app.button({
      label: app.icon("fa fa-times", "Close"),
      onclick: () => route.open(path),
    })
  );
