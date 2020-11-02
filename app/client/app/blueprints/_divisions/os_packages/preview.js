app.blueprints.os_packages.preview = (router, blueprint) => (a,x) =>
blueprint.os_packages && (blueprint.os_packages.adds || blueprint.os_packages.removes) ?
[
  'OS packages',
  a.ul([
    blueprint.os_packages.adds ? a.li([
      `Add ${blueprint.os_packages.adds.length} package${blueprint.os_packages.adds.length > 1 ? 's' : ''}`,
    ]) : null,
    blueprint.os_packages.removes ? a.li([
      `Remove ${blueprint.os_packages.removes.length} package${blueprint.os_packages.removes.length > 1 ? 's' : ''}`,
    ]) : null,
  ]),
] : null
