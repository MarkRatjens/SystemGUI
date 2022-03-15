app.docker.prebuild.output = (prebuild) =>
a['app-docker-prebuild-output']({
  $open: (el) => (action) => {
    el.$nodes = a['div.p-1']([
      app.stream({
        label: `${prebuild.split('::')[1]} build`,
        url: `/api/streaming/packs/build`,
        complete: (el) => {
          el.append(a['pre.info.p-1.m-0']('Complete'))
        }
      }),
    ])
  }
})
