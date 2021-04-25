app.admin.blueprints.about.license = (router) => (a, x) => a.div([
  app.fetch({
    url: `/api/blueprints/${router.params.blueprint_id}/license`,
    success: (license, el) => {
      el.$nodes = [
        app.form({
          url: `/api/blueprints/${router.params.blueprint_id}/license`,
          method: "PUT",
          object: {license: license},
          form: (f) => [
            f.field({
              key: 'license',
              as: 'markdown',
            }),
            f.buttons({router: router})
          ],
          success: () => router.open('..'),
        }),
      ]
    }
  }),
]);
