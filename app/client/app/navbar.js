app.navbar = (route) => (a, x) =>
  a["nav#navbar.navbar.navbar-expand.navbar-light.bg-transparent.mt-n1.mb-1.activatable"](
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
              a.a(app.icon("fas fa-home"), {
                class: 'nav-link',
                href: '#',
                $on: {click: (e, el) => {
                  e.preventDefault();
                  route.open("/")
                }},
              }),
              {
                class: 'nav-item',
                title: 'Home',
                data: {
                  path: '/'
                },
              }
            ),
            a.li(
              a.a(app.icon("fas fa-dot-circle"), {
                class: 'nav-link',
                href: '#',
                $on: {click: (e, el) => {
                  e.preventDefault();
                  route.open("/arenas")
                }},
              }),
              {
                class: 'nav-item',
                title: 'Arenas',
                data: {
                  path: '/arenas'
                },
              }
            ),
            a.li(
              a.a(app.icon("fas fa-shapes"), {
                class: 'nav-link',
                href: '#',
                $on: {click: (e, el) => {
                  e.preventDefault();
                  route.open("/blueprints")
                }},
              }),
              {
                class: 'nav-item',
                title: 'Blueprints',
                data: {
                  path: '/blueprints'
                },
              }
            ),
          ],
          {
            class: 'navbar-nav mr-auto mt-0',
          }
        ),
        {
          id: 'navbarCollapse',
          class: 'collapse navbar-collapse',
        }
      ),

      a.div(
        a.ul(
          [
            a.li(
              a.a(app.icon("fa fa-cog"), {
                class: 'nav-link',
                href: '#',
                $on: {click: (e, el) => {
                  e.preventDefault();
                  route.open("/settings")
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
                  route.open("/logout")
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
        let section = window.location.pathname.split('/')[1]
        let active = el.$(`[data-path="/${section}"]`) || el.$(`[data-path="/"]`)
        if (active) active.classList.add('active')
      },
    }
  );
