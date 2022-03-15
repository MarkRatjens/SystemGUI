app.arenaLabel = (arena) => a.i([
  a.h1([
    (arena.about || {}).title || app.placeholder('No title')
  ]),
  a.p((arena.about || {}).explanation || app.placeholder('No explanation')),
])
