app.close = (route, path='..', query={}) =>
  a["div.float-right"](
    app.button({
      label: app.icon("fa fa-times"),
      title: 'Close',
      onclick: (e) => route.open(path, query),
    })
  );
