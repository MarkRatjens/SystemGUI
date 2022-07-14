app.arenaLabel = (arena) => a.i([
  a.h3([
    (arena.about || {}).title || app.placeholder('No title')
  ]),
  a.p((arena.about || {}).explanation || app.placeholder('No explanation')),
])
