app.link = (options = {}) => (a, x) =>
  app.button({
    ...options,
    buttonTag: {
      class: options.class || "btn btn-link",
      ...options.buttonTag,
    },
  });
