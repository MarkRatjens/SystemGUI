app.docker.images = () => a['app-docker-images']([
  a['app-docker-images-placeholder.p-2']([
    app.placeholder('No images')
  ], {
    style: {display: 'none'},
    $show: (el) => () => el.style.display = 'block',
    $hide: (el) => () => el.style.display = 'none',
  }),
  a['app-docker-images-index'],
], {
  $reindex: (el) => (event) => {
    let found = []
    for (let image of event.payload) {
      let imageEl = el.$(`#docker-image-${image.identifier}`)
      if (imageEl) {
        found.push(imageEl)
      } else {
        el.$('app-docker-images-placeholder').$hide()
        imageEl = app.docker.image(image)
        found.push(imageEl)
        el.prepend(imageEl)
      }
    }
    for (let imageEl of el.$$('app-docker-image:not(.delete-fade-out)')) {
      if (!found.includes(imageEl)) {
        imageEl.$nodes = []
        imageEl.remove()
      }
    }
    setTimeout(() => {
      if (el.$$('app-docker-image:not(.delete-fade-out)').toArray.length == 0) {
        el.$('app-docker-images-placeholder').$show()
      }
    }, 500)
  },
})
