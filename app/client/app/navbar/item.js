app.navbar.item = (args) => a.li(
  a.a(app.icon(args.icon), {
    class: 'nav-link',
    href: '#',
    $on: {click: (e) => {
      let el = e.currentTarget
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
