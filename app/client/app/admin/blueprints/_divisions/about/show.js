app.admin.blueprints.about.show = (router, blueprint) => (a,x) => a.div([
  app.report({
    object: blueprint.about,
    report: (r) => [
      app.clickable(
        [
          r.field({
            key: 'title',
          }),
          r.field({
            key: 'explanation',
          }),
        ],
        () => router.open('edit'),
        {
          clickableTag: {
            class: 'p-2 mb-1',
          }
        }
      ),
    ],
  }),
  app.clickable(
    a.img(a._, {src: `/api/blueprints/${router.params.blueprintIdentifier}/icon`}),
    () => router.open('icon'),
    {
      clickableTag: {
        class: 'p-2 mb-1',
      }
    }
  ),
  app.clickable(
    app.fetch({
      url: `/api/blueprints/${router.params.blueprintIdentifier}/readme`,
      success: (readme, el) => {
        el.$nodes = [
          readme ?
          app.md(readme) :
          a['p.error']('No readme'),
        ]
      },
    }),
    () => router.open('readme'),
    {
      clickableTag: {
        class: 'p-2 mb-1',
      }
    }
  ),
  app.clickable(
    app.fetch({
      url: `/api/blueprints/${router.params.blueprintIdentifier}/license`,
      success: (license, el) => {
        el.$nodes = [
          license ?
          app.md(license) :
          a['p.error']('No license'),
        ]
      },
    }),
    () => router.open('license'),
    {
      clickableTag: {
        class: 'p-2 mb-1',
      }
    }
  ),
  a['div.mb-1']([
    app.button({
      label: app.icon('fa fa-check', 'Done'),
      onclick: () => router.open('..'),
      class: 'btn btn-primary',
    }),
  ]),
])
