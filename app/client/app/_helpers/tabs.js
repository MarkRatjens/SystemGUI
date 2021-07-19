app.tabs = (options) => (a,x) => a['div.app-tabs']([
  a["ul.nav.nav-tabs"](
    (options.tabs || []).map((tab, i) => a["li.nav-item"]([
      a.a(tab[0], {
        class: `nav-link${i == 0 ? ' active' : ''}`,
        $on: {
          click: (e,el) => {
            e.preventDefault
            el.$('^.app-tabs').$open(i)
          },
        },
      })
    ])),
  ),
  (options.tabs || []).map((tab, i) => a["div.app-tab-body"]([
    tab[1]
  ], {
    class: i == 0 ? '' : 'd-none',
  })),
], {
  $open: (el) => (i) => {
    el.$('a.nav-link.active').classList.remove('active')
    el.$$('a.nav-link').$$[i].classList.add('active')
    el.$$('div.app-tab-body').classList.add('d-none')
    el.$$('div.app-tab-body').$$[i].classList.remove('d-none')
  }
})
