app.docker.prebuild.output = (prebuild) =>
a['app-docker-prebuild-output']({
  $open: (el) => (action) => {
    el.$nodes = a['div.m-1']([
      app.stream({
        label: `${prebuild.split('::')[1]} build`,
        url: `/api/streaming/packs/build`,
        complete: (el) => {
          el.append(a['div.stream-message.background-info.mt-n2.p-1']('Complete'))
        }
      }),
    ])
  }
})
