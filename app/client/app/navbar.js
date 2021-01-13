app.navbar = (router) => (a, x) =>
  a["nav#navbar.navbar.navbar-expand.navbar-light.bg-transparent.mx-n3.mt-n1.mb-1"](
    [
      a.a([
        a({
          $nodes: [app.logo(24)],
          class: 'app-navbar-brand-icon',
        }),
        a({$text: "Engines"}),
      ], {
        href: "/",
        class: "navbar-brand",
        title: 'Home',
      }),
      a.div(
        a.ul(
          [
            a.li(
              a.a(app.icon("fas fa-tachometer-alt"), {
                class: 'nav-link',
                href: '#',
                $on: {click: (e, el) => {
                  e.preventDefault();
                  router.open("/")
                }},
              }),
              {
                class: 'nav-item',
                title: 'Dashboard',
                data: {
                  path: '/'
                },
              }
            ),
            a.li(
              a.a(app.icon("fa fa-wrench"), {
                class: 'nav-link',
                href: '#',
                $on: {click: (e, el) => {
                  e.preventDefault();
                  router.open("/admin")
                }},
              }),
              {
                class: 'nav-item',
                title: 'Admin',
                data: {
                  path: '/admin'
                },
              }
            ),
            a.li(
              a.a(app.icon("fa fa-cog"), {
                class: 'nav-link',
                href: '#',
                $on: {click: (e, el) => {
                  e.preventDefault();
                  router.open("/settings")
                }},
              }),
              {
                class: 'nav-item',
                title: 'Settings',
                data: {
                  path: '/settings'
                },
              }
            ),
            a.li(
              a.a(app.icon("fa fa-sign-out-alt"), {
                class: 'nav-link',
                href: '#',
                $on: {click: (e) => {
                  e.preventDefault();
                  router.open("/logout")
                }},
              }),
              {
                class: 'nav-item',
                title: 'Logout',
                data: {
                  path: '/logout'
                },
              }
            ),
          ],
          {
            class: 'navbar-nav ml-auto mt-0',
          }
        ),
        {
          id: 'navbarCollapse',
          class: 'collapse navbar-collapse',
        }
      ),
    ],
    {
      $activate: (el) => () => {
        el.$$('.nav-item.active').classList.remove('active')
        let section = location.pathname.split('/')[1]
        let active = el.$(`[data-path="/${section}"]`) || el.$(`[data-path="/"]`)
        if (active) active.classList.add('active')
      },
    }
  );
