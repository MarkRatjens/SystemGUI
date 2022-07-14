app.docker.compositions.composition = (composition) =>
a['app-docker-compositions-composition']({
  id: `app-docker-compositions-composition-${composition.id}`,
  $nodes: (el) => a['div.app-dashboard-item.border-bottom']([
    a['div.app-dashboard-item-panel']([
      a['div.app-dashboard-item-heading.p-2']([
        composition.identifier,
      ], {
        $on: {
          click: (e) => {
            let menuEl = e.currentTarget.$('^.app-dashboard-item .app-dashboard-item-menu')
            if (menuEl.classList.contains('active')) {
              menuEl.classList.remove('active')
            } else {
              menuEl.classList.add('active')
              menuEl.scrollIntoView({block: "center", behavior: 'smooth'});
            }
          },
        }
      }),
      app.docker.compositions.menu(composition),
    ]),
  ]),
})
