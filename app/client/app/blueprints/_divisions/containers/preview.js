app.blueprints.containers.preview = (router, blueprint) => (a,x) =>
blueprint.containers ? [
  'Containers',
  a.ul(
    blueprint.containers.map(container => a.li([
      `${container.type}:${container.image}`,
      x.lib.object.dig(container, ['ports', 'length'])
      ? a.small(container.ports.map((port) => ` ${port.protocol}:${port.port}`))
      : null
    ]))
  ),
] : null
