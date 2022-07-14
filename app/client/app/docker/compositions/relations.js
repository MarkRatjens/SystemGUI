app.docker.compositions.relations = (composition) => a['app-docker-compositions-relations']({
  $open: (el) => () => {
    el.style.display = 'block'
    el.$nodes = a['div.well.m-1']([
      a['div.p-1.overflow-auto']([
        app.fetch({
          url: `/api/arenas/@${composition.identifier}/relations`,
          placeholder: app.spinner('Loading relations'),
          xxxsuccess: (relations) => a['div.p-1']([
            app.docker.compositions.relations.chart(composition, relations)
          ], {
            style: {
              // maxHeight: '300px',
            },
          })
        }),
      ]),
    ])
  },
  $close: (el) => () => {
    el.style.display = 'none'
  },
  style: {display: 'none'}
})
