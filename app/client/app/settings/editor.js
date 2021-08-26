app.settings.editor = (route) => (a, x) => [
  a.h3("Editor"),
  app.form({
    horizontal: true,
    object: {
      editor_keymap: window.localStorage.editorKeymap,
    },
    form: (f) => [
      f.field({
        key: "editor_keymap",
        label: 'Keymap',
        as: "select",
        placeholder: "None",
        selections: {
          vim: "Vim",
          emacs: "Emacs",
          sublime: "Sublime",
        },
      }),
      f.buttons({route: route, cancel: {onclick: () => window.history.back()}}),
    ],
    action: (submission) => {
      let form = submission.form.$output()
      window.localStorage.editorKeymap = form.editor_keymap;
      route.open('..')
      return false;
    },
  }),
];
