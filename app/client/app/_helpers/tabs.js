app.tabs = (options) => a['div.app-tabs']([
  a["ul.nav.nav-tabs"](
    (options.tabs || []).map((tab, i) => a["li.nav-item"]([
      a.a(tab.label, {
        tabindex: 0,
        ...options.navTag,
        class: `nav-link${i == 0 ? ' active' : ''}`,
        $on: {
          'click: open a tab': (e) => {
            let el = e.currentTarget
            e.preventDefault
            el.$('^.app-tabs').$open(i)
          },
        },
      }),
    ])),
  ),
  a.div((options.tabs || []).map((tab, i) => a["app-tabs-tab-body"]({
    $nodes: tab.body,
    ...options.tabBodyTag,
    class: `${(options.tabBodyTag || {}).class || ''} ${i == 0 ? '' : 'd-none'}`,
  }))),
], {
  $open: (el) => (i) => {
    if (el.$$('a.nav-link').$$[i].classList.contains('active')) return
    let body = el.$('app-tabs-tab-body:not(.d-none)')
    let valid = body.$$('input, textarea, select').checkValidity().toArray.every(
      validity => validity == true
    )
    if (!valid) {
      let firstInvalid = body.$('input:invalid, textarea:invalid, select:invalid')
      firstInvalid && firstInvalid.reportValidity()
      return
    }
    el.$('a.nav-link.active').classList.remove('active')
    el.$$('a.nav-link').$$[i].classList.add('active')
    el.$$('app-tabs-tab-body').classList.add('d-none')
    el.$$('app-tabs-tab-body').$$[i].classList.remove('d-none')
  },
  ...options.tabsTag,
})
