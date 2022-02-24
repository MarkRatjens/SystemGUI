app.link = (options = {}) => 
  app.button({
    ...options,
    buttonTag: {
      class: options.class || "btn btn-link",
      ...options.buttonTag,
    },
  });
