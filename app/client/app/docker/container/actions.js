app.docker.container.actions = (container) => a['app-docker-container-actions']([
  ...[
    ['Info', 'fas fa-info', 'info'],
    ['Processes (top)', 'fas fa-table', 'top'],
    ['Log', 'fas fa-file', 'log'],
    ['Delete', 'fas fa-trash', 'delete'],
  ].map((command) => app.button({
    label: app.icon(command[1]),
    title: command[0],
    data: {name: command[2]},
    buttonTag: {
      $target: (el) => () => el.$(`^app-docker-container app-docker-container-${command[2]}`),
      $close: (el) => () => {
        el.classList.remove('active')
        el.$target().$close()
      },
      $open: (el) => () => {
        let commandsEl = el.$('^.app-dashboard-item-commands')
        commandsEl.classList.add('active')
        commandsEl.$$('app-docker-container-actions > button.active').$close()
        el.classList.add('active')
        el.$target().$open()
      },
    },
    onclick: (e, el) => {
      e.stopPropagation()
      if (el.classList.contains('active')) {
        el.$close()
      } else {
        el.$open()
      }
    },
    class: 'btn app-btn',
  })),
])
