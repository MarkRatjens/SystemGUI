app.report.shim = {
  help: (r, target) => (options = {}) => {
    let help = (a, x) => options.help ? app.md(options.help) : a._;
    return target({
      ...options,
      help: help,
    });
  },

  template: (r, target) => (options = {}) => {
    let template = (a, x) => options.template
      ? app.md(options.template(r))
      : a._;
    return template;
  },

  controls: {
    many: (f, target) => (options = {}) => (a, x) => target({
      ...options,
      placeholder: a['.placeholder.form-control']('None'),
    }),
    listgroup: (f, target) => (options = {}) => (a, x) => options.value.length ?
    a['ul.list-group'](
        options.value.map( i => a['li.list-group-item']( i || a._ ))
    ) :
    a['.placeholder.form-control']('None'),
    boolean: (f, target) => (options = {}) => (a, x) =>
      target({
        ...options,
        label: {
          true: a[".boolean-true"](app.icon("fa fa-check", "True")),
          false: a[".boolean-false"](app.icon("fa fa-times", "False")),
        },
      }),

    markdown: (r, target) => (options = {}) => (a, x) =>
      x.markedjs.report.control(r, {
        ...options,
        markdownTag: {
          class: "form-control text-dark h-100",
          ...options.markdownTag,
        },
      }),

    code: (r, target) => (options = {}) => (a, x) =>
      x.codemirror.report.control(r, options),

    terminal: (r, target) => (options = {}) => (a, x) =>
      x.xtermjs.report.control(r, options),
  },

  fieldset: (r, target) => (options = {}) => (a, x) =>
    r.dependent({
      body: a["fieldset|appkit-form-control"](
        [
          options.legend ? a.legend(options.legend, options.legendTag) : a._,
          options.body || a._,
        ],
        options.fieldsetTag
      ),
      ...options.dependent,
    }),

  row: (r, target) => (options = {}) => (a, x) =>
    a["div.row"](
      (options.columns || []).map((column) => a["div.col"](column)),
      options.fieldsetTag
    ),
};
