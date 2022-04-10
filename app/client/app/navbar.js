app.navbar = (route) =>
a["nav#navbar.navbar.navbar-expand.navbar-light.activatable"](
  [
    a.a([
      a['app-navbar-brand-icon'](app.logo(24)),
      "Engines",
    ], {
      href: "/",
      class: "navbar-brand",
      title: 'Home',
    }),

    a['div#navbarCollapse.collapse.navbar-collapse'](
      a['ul.navbar-nav.mr-auto.mt-0']([
        app.navbar.item({
          route: route,
          icon: 'fas fa-tachometer-alt',
          path: '/',
          title: 'Dashboard',
        }),
        app.navbar.item({
          route: route,
          icon: 'fas fa-tools',
          path: '/providers',
          title: 'Providers',
        }),
        app.navbar.item({
          route: route,
          icon: 'fas fa-vector-square',
          path: '/arenas',
          title: 'Arenas',
        }),
        app.navbar.item({
          route: route,
          icon: 'fas fa-shapes',
          path: '/blueprints',
          title: 'Blueprints',
        }),
      ])
    ),

    a['div#navbarCollapse.collapse.navbar-collapse'](
      a['ul.navbar-nav.ml-auto.mt-0']([
        app.navbar.item({
          route: route,
          icon: 'fas fa-cog',
          path: '/settings',
          title: 'Setting',
        }),
        app.navbar.item({
          route: route,
          icon: 'fa fa-sign-out-alt',
          path: '/signout',
          title: 'Sign out',
        }),
      ])
    ),
  ],
  {
    $init: (el) => el.$activate(),
    $activate: (el) => () => {
      el.$$('.nav-item.active').classList.remove('active')
      let section = window.location.pathname.split('/')[1]
      let active = el.$(`[data-path="/${section}"]`) || el.$(`[data-path="/"]`)
      if (active) active.classList.add('active')
    },
  }
);
