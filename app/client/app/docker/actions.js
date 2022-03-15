app.docker.actions = () => a['app-docker-actions']([
  ...[
    ['Prebuild','fas fa-compact-disc', 'prebuilds'],
    ['Orchestrate','fas fa-magic', 'orchestrate'],
    ['Info','fas fa-info', 'info'],
  ].map((command) => app.button({
    label: app.icon(command[1]),
    title: command[0],
    buttonTag: {
      $target: (el) => () => el.$(`^app-docker app-docker-${command[2]}`),
      $close: (el) => () => {
        el.classList.remove('active')
        el.$target().$close()
      },
      $open: (el) => () => {
        let commandsEl = el.$('^.app-dashboard-item-commands')
        commandsEl.classList.add('active')
        commandsEl.$$('app-docker-actions > button.active').$close()
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
