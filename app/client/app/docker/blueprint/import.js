app.docker.blueprint.import = () => a['app-docker-blueprint-import.app-docker-command']({
  $open: (el) => () => {
    el.style.display = 'block'
    el.$nodes = a['div.m-4']([
      app.jsonForm({
        url: "/api/publications/import",
        buttonless: true,
        method: 'POST',
        form: (f) => [
          a['div.row.no-gutters']([
            a['div.col-sm-6.col-xl-5.px-1']([
              f.field({
                key: "repository",
                placeholder: 'Repository URL',
                name: 'blueprint-repository-url',
                type: 'url',
                required: true,
                label: false,
              }),
            ]),
            a['div.col-sm-3.col-xl-2.px-1']([
              f.field({
                key: "branch",
                name: 'blueprint-branch',
                placeholder: 'Branch optional',
                label: false,
              }),
            ]),
            a['div.col-sm-3.col-xl-2.px-1']([
              f.field({
                key: 'identifier',
                name: 'blueprint-identifier',
                placeholder: 'Identifier optional',
                label: false,
              }),
            ]),
            a['div.col-sm-6.col-xl-1.px-1']([
              f.field({
                key: 'force',
                as: 'checkbox',
                label: false,
                control: {label: 'Force'},
                value: 'on',
              }),
            ]),
            a['div.col-sm-6.col-xl-2.px-1.text-right']([
              f.submit(),
            ]),
          ]),
        ],
        digest: (form) => app.compact({
          model: {
            repository: form.repository,
            branch: form.branch,
            identifier: form.identifier,
          },
          force: form.force,
        }),
        success: () => el.$stream(),
      }),
    ])
  },
  $close: (el) => () => {
    el.style.display = 'none'
  },
  $stream: (el) => () => {
    el.$nodes = a['div.m-1']([
      app.stream({
        label: 'Importing',
        url: `/api/streaming/publications/import`,
        complete: (el) => {
          el.append(a['div.stream-message.background-info.mt-n2.p-1']('Complete'))
        }
      }),
    ])
  },
  style: {display: 'none'}
})
