app.docker.compositions.applications.actions = (composition) =>
a['app-docker-compositions-applications-actions']([
  ...[
    ['Edit', 'fas fa-edit', 'edit'],
    ['Info', 'fas fa-info', 'info'],
    ['Delete', 'fas fa-trash', 'delete'],
  ].map((command) => app.button({
    label: app.icon(command[1]),
    title: command[0],
    buttonTag: {
      $target: (el) => () => el.$(`^app-docker-compositions-applications-application app-docker-compositions-applications-${command[2]}`),
      $close: (el) => () => {
        el.classList.remove('active')
        el.$target().$close()
      },
      $open: (el) => () => {
        let menuEl = el.$('^.app-dashboard-item-menu')
        menuEl.classList.add('active')
        menuEl.$$('app-docker-compositions-applications-actions > button.active').$close()
        el.classList.add('active')
        el.$target().$open()
        el.scrollIntoView({block: "center", behavior: 'smooth'});
      },
    },
    onclick: (e) => {
      let el = e.currentTarget
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
