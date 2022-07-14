app.form.shim = {
  form: (f, target) => (options = {}) =>
    target({
      ...options,
      asyncformTag: {
        $init: (el) => {
          // Focus on first form control.
          setTimeout(
            () => {
              if (options.focus != false) {
                let first = el.$("ax-appkit-form-control");
                if (first) first.$focus()
              }
            },
            100
          )
        },
        ...options.asyncformTag,
        $on: {
          "ax.appkit.form.async.complete: revert button labels": (e) => {
            let el = e.currentTarget
            for (let button of el.$$('button')) {
              button.$revert && button.$revert();
            }
          },
          ...(options.asyncformTag || {}).$on,
        },
      },
    }),

  help: (f, target) => (options = {}) => {
    let help = options.help ? app.md(options.help) : '';
    return target({
      ...options,
      help: help,
    });
  },

  template: (f, target) => (options = {}) =>
    options.template ? app.md(options.template(f)) : '',

  button: (f, target) => (options = {}) =>
    target({
      ...options,
      onclick: (e) => {
        let el = e.currentTarget
        let to = options.to;
        el.$from = el.innerHTML;
        if (to) el.$nodes = [to];
        options.onclick && options.onclick(e)
      },
      buttonTag: {
        $revert: (el) => () => {
          if (el.$from) el.$html = el.$from;
        },
        ...options.buttonTag,
      },
    }),

  cancel: (f, target) => (options = {}) =>
    f.button({
      label: app.icon("fa fa-times", "Cancel"),
      to: app.spinner("Cancelling…"),
      onclick: () => options.route.open(".."),
      ...options,
    }),

  submit: (f, target) => (options = {}) =>
    target({
      label: app.icon("fa fa-check", "Submit"),
      ...options,
      button: {
        to: app.spinner("Submitting…"),
        ...options.button,
      },
      buttonTag: {
        ...options.buttonTag,
        $on: {
          "click: turn off all sorting": (e) => {
            let el = e.currentTarget
            el.$("^form").$$("|appkit-form-nest-sort-off button").click();
          },
          "click: revert label when invalid": (e) => {
            let el = e.currentTarget
            let valid = el.$("^form").checkValidity();
            if (!valid) el.$revert();
          },
          ...(options.buttonTag || {}).$on,
        },
      },
    }),

  controls: {
    combobox: (f, target) => (options = {}) =>
      f.controls.selectinput(options),
    json: (f, target) => (options = {}) =>
      x.jsoneditor.form.control(f, { theme: "bootstrap3", ...options }),
    code: (f, target) => (options = {}) => {
      if (ax.is.object(options.mode)) {
        options.mode = {
          value: options.mode.value,
          selections: options.mode.selections,
        };
      }

      return x.codemirror.form.control(f, {
        lineNumbers: true,
        keymap: window.localStorage.editorKeymap,
        ...options,
      });
    },
    markdown: (f, target) => (options = {}) =>
      x.easymde.form.control(f, options),

  },

  buttons: (f) => (options = {}) =>
    a["app-form-buttons"](
      [
        options.cancel == false
          ? ''
          : f.cancel({
            route: options.route,
            ...options.cancel,
          }),
        " ",
        options.submit == false
          ? ''
          : f.submit(options.submit),
      ],
      {
        ...options.buttonsTag,
        style: {
          display: "block",
          ...(options.buttonsTag || {}).style,
        },
      }
    ),

  row: (f, target) => (options = {}) =>
    a["div.row"](
      (options.columns || []).map((column) => a["div.col-sm"](column)),
      options.rowTag || {}
    ),
};
