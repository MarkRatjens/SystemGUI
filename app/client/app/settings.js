app.settings = (route) => (a, x) => [
  a.h1("Settings"),

  app.form({
    object: {
      theme: window.localStorage.cssTheme,
      editor_keymap: window.localStorage.editorKeymap,
      menu_width: Math.round(window.localStorage.systemMenuWidthPercent),
    },
    form: (f) => [
      f.field({
        key: "theme",
        as: "select",
        placeholder: "Default",
        selections: {
          dark: "Dark",
          desert: 'Desert',
          forest: 'Forest',
          ocean: 'Ocean',
          psyco: 'Psyco',
          sky: 'Sky',
          snow: 'Snow',
        },
      }),
      f.field({
        key: "menu_width",
        label: 'Menu width %',
        type: "number",
        min: '10',
        max: '90',
        step: '1',
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
      f.buttons({route: route, cancel: {onclick: () => window.history.back()}}),
    ],
    action: (submission) => {
      let form = submission.form.$output()
      window.localStorage.cssTheme = form.theme;
      window.localStorage.editorKeymap = form.editor_keymap;
      window.localStorage.editorDefaultMode =
        form.editor_default_mode;
      window.localStorage.systemMenuWidthPercent =
        form.menu_width
      window.history.back()
      setTimeout(() => window.location.reload())
      return false;
    },
  }),
];
