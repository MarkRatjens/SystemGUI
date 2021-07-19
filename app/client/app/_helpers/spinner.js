app.spinner = (text) => (a, x) => {

  text = app.i18n(text)

  return [
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
  ];

};
