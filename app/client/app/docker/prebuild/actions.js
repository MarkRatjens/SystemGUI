app.docker.prebuild.actions = (prebuild) => a['app-docker-prebuild-actions']([
  ...[
    ['Build', 'fas fa-hammer', 'build'],
    ['Info', 'fas fa-info', 'info'],
  ].map((command) => app.button({
    label: app.icon(command[1]),
    title: command[0],
    buttonTag: {
      $target: (el) => () => el.$(`^app-docker-prebuild app-docker-prebuild-${command[2]}`),
      $close: (el) => () => {
        el.classList.remove('active')
        el.$target().$close()
      },
      $open: (el) => () => {
        let commandsEl = el.$('^.app-dashboard-item-commands')
        commandsEl.classList.add('active')
        commandsEl.$$('app-docker-prebuild-actions > button.active').$close()
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
