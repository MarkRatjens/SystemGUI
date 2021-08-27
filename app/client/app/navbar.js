app.navbar = (route) => (a, x) =>
a["nav#navbar.navbar.navbar-expand.navbar-light.mt-n1.mb-1.activatable"](
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
          icon: 'fas fa-home',
          path: '/',
          title: 'Home',
        }),
        app.navbar.item({
          route: route,
          icon: 'fas fa-dot-circle',
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
          icon: 'fas fa-key',
          path: '/keys',
          title: 'Keys',
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

app.navbar.item = (args) => (a,x) => a.li(
  a.a(app.icon(args.icon), {
    class: 'nav-link',
    href: '#',
    $on: {click: (e, el) => {
      e.preventDefault();
      args.route.open(args.path)
    }},
  }),
  {
    class: 'nav-item',
    title: args.title,
    data: {
      path: args.path
    },
  }
)
