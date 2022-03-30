app.docker.subactions = () => a['app-docker-subactions']([
  ...[
    ['Import', 'fas fa-file-import', 'blueprint-import'],
    ['New prebuild', 'fas fa-plus', 'prebuild-new'],
    ['New composition', 'fas fa-plus', 'composition-new'],
    // ['Info', 'fas fa-info', 'info'],
  ].map((command) => app.button({
    label: app.icon(command[1]),
    title: command[0],
    onclick: (e) => {
      e.stopPropagation()
      let el = e.currentTarget
      el.$('^app-docker-menu').$toggle(el, command[2])
    },
    class: `btn app-btn app-dashboard-item-menu-button app-dashboard-item-menu-button-${command[2]}`,
    buttonTag: {
      $hide: (el) => () => el.style.display = 'none',
      $show: (el) => () => el.style.display = 'inline-block',
      style: {display: 'none'}
    },
  })),
])
