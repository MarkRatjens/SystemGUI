app.admin.blueprints.images.preview = (router, blueprint) => (a,x) =>
blueprint.images ?
[
  'Images',
  a.ul(
    blueprint.images.map(image => a.li([
      `${image.type}:${image.image}`,
      // x.lib.object.dig(image, ['scripts', 'shell', 'length']) ?
      // a.small(` ${image.scripts.shell.length} shell scripts`) : null
    ]))
  ),
] : null
