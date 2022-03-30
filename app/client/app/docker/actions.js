app.docker.actions = () => a['app-docker-actions']([
  ...[
    ['Blueprints', 'fas fa-shapes', 'blueprints'],
    ['Prebuild','fas fa-compact-disc', 'prebuilds'],
    ['Compositions','fas fa-magic', 'compositions'],
    ['Info','fas fa-info', 'info'],
  ].map((command) => app.button({
    label: app.icon(command[1]),
    title: command[0],
    onclick: (e) => {
      e.stopPropagation()
      let el = e.currentTarget
      el.$('^app-docker-menu').$toggle(el, command[2])
    },
    class: `btn app-btn app-dashboard-item-menu-button app-dashboard-item-menu-button-${command[2]}`,
  })),
])
