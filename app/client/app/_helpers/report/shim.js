app.report.shim = {
  help: (r, target) => (options = {}) => {
    let help = options.help ? app.md(options.help) : '';
    return target({
      ...options,
      help: help,
    });
  },

  template: (r, target) => (options = {}) => {
    let template = options.template
      ? app.md(options.template(r))
      : '';
    return template;
  },

  controls: {
    many: (f, target) => (options = {}) => target({
      ...options,
      placeholder: a['.placeholder.form-control.bg-transparent']('None'),
    }),
    listgroup: (f, target) => (options = {}) => options.value.length ?
    a['ul.list-group'](
        options.value.map( i => a['li.list-group-item']( i || '' ))
    ) :
    a['.placeholder.form-control.bg-transparent']('None'),
    boolean: (f, target) => (options = {}) => 
      target({
        ...options,
        label: {
          true: a[".boolean-true"](app.icon("fa fa-check", "True")),
          false: a[".boolean-false"](app.icon("fa fa-times", "False")),
        },
      }),

    markdown: (r, target) => (options = {}) => 
      x.markedjs.report.control(r, {
        ...options,
        markdownTag: {
          class: "form-control text-dark h-100",
          ...options.markdownTag,
        },
      }),

    code: (r, target) => (options = {}) => 
      x.codemirror.report.control(r, options),

    terminal: (r, target) => (options = {}) => 
      x.xtermjs.report.control(r, options),
  },

  fieldset: (r, target) => (options = {}) => 
    r.dependent({
      body: a["fieldset|appkit-form-control"](
        [
          options.legend ? a.legend(options.legend, options.legendTag) : '',
          options.body || '',
        ],
        options.fieldsetTag || {}
      ),
      ...options.dependent,
    }),

  row: (r, target) => (options = {}) => 
    a["div.row"](
      (options.columns || []).map((column) => a["div.col"](column)),
      options.rowTag || {}
    ),
};
