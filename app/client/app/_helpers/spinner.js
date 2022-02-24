app.spinner = (text) => {

  text = app.i18n(text)

  return a['app-spinner']([
    x.cycle({
      collection: [
        app.icon("far fa-hourglass"),
        app.icon("fas fa-hourglass-start"),
        app.icon("fas fa-hourglass-half"),
        app.icon("fas fa-hourglass-end"),
        app.icon("far fa-hourglass"),
      ],
    }),
    ' ',
    text,
  ]);

};
