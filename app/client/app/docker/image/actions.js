app.docker.image.actions = (image) => a['app-docker-image-actions']([
  ...[
    ['Run','fas fa-running', 'run'],
    ['Info','fas fa-info', 'info'],
    ['Delete', 'fas fa-trash', 'delete'],
  ].map((command) => app.button({
    label: app.icon(command[1]),
    title: command[0],
    buttonTag: {
      $target: (el) => () => el.$(`^app-docker-image app-docker-image-${command[2]}`),
      $close: (el) => () => {
        el.classList.remove('active')
        el.$target().$close()
      },
      $open: (el) => () => {
        let commandsEl = el.$('^.app-dashboard-item-commands')
        commandsEl.classList.add('active')
        commandsEl.$$('app-docker-image-actions > button.active').$close()
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
