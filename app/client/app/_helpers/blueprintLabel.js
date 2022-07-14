app.blueprintLabel = (blueprint) => a.i([
  a.h3([
    a.img({
      src: `/api/blueprints/@${blueprint.identifier}/icon/thumbnail`,
      height: '48',
      width: '48'
    }),
    ' ',
    (blueprint.about || {}).title || app.placeholder('No title')
  ]),
  a.p((blueprint.about || {}).explanation || app.placeholder('No explanation')),
])
