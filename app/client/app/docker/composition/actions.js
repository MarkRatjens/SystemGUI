app.docker.composition.actions = (composition) => a['app-docker-composition-actions']([
  ...[
    ['Up', 'fas fa-arrow-up', 'up'],
    ['Down', 'fas fa-arrow-down', 'down'],
    ['Info', 'fas fa-info', 'info'],
    ['Delete', 'fas fa-trash', 'delete'],
  ].map((command) => app.button({
    label: app.icon(command[1]),
    title: command[0],
    buttonTag: {
      $target: (el) => () => el.$(`^app-docker-composition app-docker-composition-${command[2]}`),
      $close: (el) => () => {
        el.classList.remove('active')
        el.$target().$close()
      },
      $open: (el) => () => {
        let commandsEl = el.$('^.app-dashboard-item-commands')
        commandsEl.classList.add('active')
        commandsEl.$$('app-docker-composition-actions > button.active').$close()
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
