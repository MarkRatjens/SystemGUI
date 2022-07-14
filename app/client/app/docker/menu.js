app.docker.menu = () =>
a['app-docker-menu']([
  a['div.app-dashboard-item-menu']([
    app.float({
      left: a['div.p-1'](app.docker.subactions()),
      right: a['div.p-1'](app.docker.actions()),
    }),
    app.docker.blueprints(),
    app.docker.prebuilds(),
    app.docker.compositions(),
    app.docker.info(),
    app.docker.blueprints.import(),
    app.docker.compositions.new(),
    app.docker.prebuilds.new(),
    a['small']('Images'),
    a['div.border-top'](app.docker.images()),
    a['small']('Containers'),
  ]),
  a['div.border-top'](app.docker.containers()),
], {
  $toggle: (el) => (buttonEl, command) => {
    let activeEl = el.$('.app-dashboard-item-menu-button.active')
    if (activeEl == buttonEl) {
      el.$$('.app-dashboard-item-menu-button').classList.remove('active')
      el.$(`^app-docker app-docker-${command}`).$close()
      if (command == 'blueprints' || command == 'blueprints-import') {
        el.$('.app-dashboard-item-menu-button-blueprints-import').$hide()
        if (command == 'blueprints-import') {
          el.$('.app-dashboard-item-menu-button-blueprints').click()
        }
      } else if (command == 'prebuilds' || command == 'prebuilds-new') {
        el.$('.app-dashboard-item-menu-button-prebuilds-new').$hide()
        if (command == 'prebuilds-new') {
          el.$('.app-dashboard-item-menu-button-prebuilds').click()
        }
      } else if (command == 'compositions' || command == 'compositions-new') {
        el.$('.app-dashboard-item-menu-button-compositions-new').$hide()
        if (command == 'compositions-new') {
          el.$('.app-dashboard-item-menu-button-compositions').click()
        }
      }
    } else {
      el.$$('.app-dashboard-item-menu-button').classList.remove('active')
      buttonEl.classList.add('active')
      el.$('^app-docker').$$('.app-docker-command').$close()
      el.$(`^app-docker app-docker-${command}`).$open()
      el.$('.app-dashboard-item-menu-button-blueprints-import').$hide()
      el.$('.app-dashboard-item-menu-button-prebuilds-new').$hide()
      el.$('.app-dashboard-item-menu-button-compositions-new').$hide()
      if (command == 'blueprints' || command == 'blueprints-import') {
        el.$('.app-dashboard-item-menu-button-blueprints-import').$show()
      } else if (command == 'prebuilds' || command == 'prebuilds-new') {
        el.$('.app-dashboard-item-menu-button-prebuilds-new').$show()
      } else if (command == 'compositions' || command == 'compositions-new') {
        el.$('.app-dashboard-item-menu-button-compositions-new').$show()
      }
    }
  },
})
