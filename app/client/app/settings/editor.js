app.settings.editor = (route) => a.div([
  app.close(route),
  a.h5('Editor'),
  a.hr,
  app.jsonForm({
    action: (submition) => {
      window.localStorage.editorKeymap =
      submition.form.$value().keymap
      route.open('..')
    },
    route: route,
    object: {
      keymap: window.localStorage.editorKeymap,
    },
    horizontal: true,
    form: (f) => [
      f.field({
        key: "keymap",
        as: "select",
        placeholder: "None",
        selections: {
          vim: "Vim",
          emacs: "Emacs",
          sublime: "Sublime",
        },
      }),
    ],
  }),
])
