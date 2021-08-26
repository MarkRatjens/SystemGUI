app.settings.appearance = (route) => (a, x) => [
  a.h3("Appearance"),
  app.form({
    horizontal: true,
    object: {
      theme: window.localStorage.cssTheme,
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
      f.buttons({route: route, cancel: {onclick: () => window.history.back()}}),
    ],
    action: (submission) => {
      let form = submission.form.$output()
      window.localStorage.cssTheme = form.theme;
      window.localStorage.systemMenuWidthPercent =
        form.menu_width
      window.history.back()
      setTimeout(() => window.location.reload())
      return false;
    },
  }),
];
