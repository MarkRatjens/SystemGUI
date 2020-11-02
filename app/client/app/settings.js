app.settings = (router) => (a, x) => [
  a.h1("Settings"),

  app.form({
    object: {
      theme: window.localStorage.cssTheme,
      editor_keymap: window.localStorage.editorKeymap,
    },
    form: (f) => [
      f.field({
        key: "theme",
        as: "select",
        placeholder: "Default",
        selections: {
          dark: "Dark",
        },
      }),
      f.field({
        key: "editor_keymap",
        as: "select",
        placeholder: "None",
        selections: {
          vim: "Vim",
          emacs: "Emacs",
          sublime: "Sublime",
        },
      }),
      f.buttons({router: router}),
    ],
    action: (submition) => {
      let form = submition.form.$value()
      window.localStorage.cssTheme = form.theme;
      window.localStorage.editorKeymap = form.editor_keymap;
      window.localStorage.editorDefaultMode =
        form.editor_default_mode;
      location.assign("/");
      return false;
    },
  }),
];
