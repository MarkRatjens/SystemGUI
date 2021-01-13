app.dashboard.blueprints.provisioning.remove = (router, arena) => (a, x) => [

  app.http({
    url: '/api/provisioning',
    query: {
      resolution_identifier: router.params.blueprint_id
    },
    placeholder: app.spinner('Loading provisioning'),
    success: (provisioning, el) => {
      let arena_identifiers = provisioning.map((provisions) => provisions.split('/')[0])
      el.$nodes = [
        app.form({
          form: (f) => [
            f.field({
              key: 'arena_identifier',
              label: false,
              as: 'select',
              selections: arena_identifiers,
            }),
            f.buttons({router: router})
          ],
          action: (submission) => {
            let provisions = submission.form.$value()
            el.$nodes = [
              app.http({
                url: `/api/provisioning/${provisions.arena_identifier}/${router.params.blueprint_id}`,
                method: 'Delete',
                placeholder: app.spinner('Removing provisions'),
                success: () => router.open('..'),
              })
            ]
          },
        }),
      ]
    }
  }),

]
