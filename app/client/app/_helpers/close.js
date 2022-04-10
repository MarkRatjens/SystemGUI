app.close = (route, path='..') =>
  a["div.float-right"](
    app.button({
      label: app.icon("fa fa-times"),
      title: 'Close',
      onclick: (e) => route.open(path),
    })
  );
