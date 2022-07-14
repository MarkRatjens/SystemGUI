app.docker.prebuilds.output = (prebuild) =>
a['app-docker-prebuilds-output']({
  $open: (el) => (action) => {
    el.$nodes = a['div.m-1']([
      app.stream({
        label: `${prebuild.split('::')[1]} build`,
        url: `/api/streaming/packs/@${prebuild}/building`,
        complete: (el) => {
          el.append(a['div.app-stream-message.bordered-info.mt-n2.p-1']('Complete'))
        }
      }),
    ])
  }
})
