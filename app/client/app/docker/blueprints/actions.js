app.docker.blueprints.actions = (blueprint) => a['app-docker-blueprints-actions']([
  ...[
    ['Readme', 'fab fa-readme', 'readme'],
    ['License', 'fas fa-file-contract', 'license'],
    ['Relations', 'fas fa-project-diagram', 'relations'],
    ['Info', 'fas fa-info', 'info'],
  ].map((command) => app.button({
    label: app.icon(command[1]),
    title: command[0],
    buttonTag: {
      $target: (el) => () => el.$(`^app-docker-blueprints-blueprint app-docker-blueprints-${command[2]}`),
      $close: (el) => () => {
        el.classList.remove('active')
        el.$target().$close()
      },
      $open: (el) => () => {
        let menuEl = el.$('^.app-dashboard-item-menu')
        menuEl.classList.add('active')
        menuEl.$$('.app-dashboard-item-menu-button.active').$close()
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
    class: 'btn app-btn app-dashboard-item-menu-button',
  })),
])
