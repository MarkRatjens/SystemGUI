app.home = (router) => (a,x) => [
  app.button({
    label: app.icon("fas fa-map", "Blueprints"),
    onclick: () => router.open("blueprints"),
  }),
  app.button({
    label: app.icon("fas fa-drafting-compass", "Resolutions"),
    onclick: () => router.open("resolutions"),
  }),
  app.button({
    label: app.icon("fas fa-box-open", "Packs"),
    onclick: () => router.open("packs"),
  }),
  app.button({
    label: app.icon("fas fa-globe", "Domains"),
    onclick: () => router.open("domains"),
  }),
  app.button({
    label: app.icon("fas fa-dot-circle", "Arenas"),
    onclick: () => router.open("arenas"),
  }),
  a.hr,
  app.button({
    label: app.icon("fas fa-server", "System"),
    onclick: () => router.open("system"),
  }),
  a.hr,
  app.button({
    label: app.icon("fas fa-shapes", "Applications"),
    onclick: () => router.open("applications"),
  }),
]
