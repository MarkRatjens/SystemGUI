app.form.shim = {
  form: (f, target) => (options = {}) =>
    target({
      ...options,
      asyncformTag: {
        $init: (el) => {
          // Focus on first form control.
          setTimeout(
            () => {
              let first = el.$("appkit-form-control");
              if (first) first.$focus()
            }
          )
        },
        ...options.asyncformTag,
        $on: {
          "ax.appkit.form.async.complete: revert submit button label": (
            e,
            el
          ) => {
            for (let button of el.$$('app-form-buttons button').$$) {
              button.$revert && button.$revert();
            }
          },
          ...(options.asyncformTag || {}).$on,
        },
      },
    }),

  help: (f, target) => (options = {}) => {
    let help = (a, x) => options.help ? app.md(options.help) : null;
    return target({
      ...options,
      help: help,
    });
  },

  template: (f, target) => (options = {}) =>
    (a, x) => options.template ? app.md(options.template(f)) : null,

  button: (f, target) => (options = {}) =>
    target({
      ...options,
      buttonTag: {
        ...options.buttonTag,
        $on: {
          "click: change button label": (e, el) => {
            let to = options.to;
            el.$from = el.innerHTML;
            if (to) el.$nodes = [to];
          },
          ...(options.buttonTag || {}).$on,
        },
        $revert: (el) => () => {
          if (el.$from) el.$html = el.$from;
        },
      },
    }),

  submit: (f, target) => (options = {}) =>
    target({
      ...options,
      button: {
        to: app.spinner("Submitting…"),
        ...options.button,
      },
      buttonTag: {
        ...options.buttonTag,
        $on: {
          "click: turn off all sorting": (e, el) => {
            el.$("^form").$$("|appkit-form-nest-sort-off button").click();
          },
          "click: revert label when invalid": (e, el) => {
            let valid = el.$("^form").checkValidity();
            if (!valid) el.$revert();
          },
          ...(options.buttonTag || {}).$on,
        },
      },
    }),

  controls: {
    combobox: (f, target) => (options = {}) => (a, x) =>
      f.controls.selectinput(options),
    json: (f, target) => (options = {}) => (a, x) =>
      x.jsoneditor.form.control(f, { theme: "bootstrap3", ...options }),
    code: (f, target) => (options = {}) => (a, x) => {
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
    markdown: (f, target) => (options = {}) => (a, x) =>
      x.easymde.form.control(f, options),

  },

  buttons: (f) => (options = {}) => (a, x) =>
    a["app-form-buttons"](
      [
        options.cancel == false
          ? null
          : f.button({
              label: app.icon("fa fa-times", "Cancel"),
              to: app.spinner("Cancelling…"),
              onclick: () => options.route.open(".."),
              ...options.cancel,
            }),
        " ",
        options.submit == false
          ? null
          : f.submit({
              label: app.icon("fa fa-check", "Submit"),
              ...options.submit,
            }),
      ],
      {
        ...options.buttonsTag,
        style: {
          display: "block",
          ...(options.buttonsTag || {}).style,
        },
      }
    ),

  row: (f, target) => (options = {}) => (a, x) =>
    a["div.row"](
      (options.columns || []).map((column) => a["div.col-sm"](column)),
      options.rowTag
    ),
};
