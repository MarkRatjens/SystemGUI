app.docker.composition.application.form = (resolution) =>
a['app-docker-composition-application-form']([
  app.jsonForm({
    url: `/api/resolutions/@${resolution.identifier}`,
    object: {resolution: JSON.stringify(resolution, null, 2)},
    form: f => [
      f.field({
        key: 'resolution',
        as: 'code',
        label: false,
        control: {
          mode: 'javascript',
          keymap: window.localStorage.editorKeymap,
          label: `Edit ${resolution.identifier}`
        },
        fieldTag: {
          $on: {
            keyup: (e) => {
              let el = e.currentTarget
              let validationEl = el.$('^form app-json-validation')
              try {
                JSON.parse(el.$('ax-appkit-form-control').$value())
                validationEl.$('.error').$nodes = []
                validationEl.$('textarea').setCustomValidity('')
              } catch {
                validationEl.$('.error').$nodes = app.icon('fas fa-exclamation-triangle', 'Invalid JSON')
                validationEl.$('textarea').setCustomValidity('Invalid JSON')
              }
            }
          }
        },
      }),
      a['app-json-validation']([
        a.textarea({
          style: {
            border: 0,
            width: 0,
            height: 0,
            resize: 'none',
            padding: 0,
            display: 'block',
          }
        }),
        a['.error']
      ]),
      a['div.mb-4']([
        f.submit(),
      ]),
    ],
    digest: (form) => {
      return {model: JSON.parse(form.resolution)}
    },
    buttonless: true,
    success: (_, el) => {
      el.$('^app-docker-composition-application app-docker-composition-application-stale').$nodes = []
      el.$('ax-appkit-asyncform-body').$nodes = []
      return a['div.p-4']('Successfully updated.')
    },
  }),
])
