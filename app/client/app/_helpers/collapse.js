app.collapse = ( options={} ) => (a,x) => a['app-collapse']( [
  app.button( {
    label: a({
      $tag: 'app-collapse-indicator',
      $nodes: ( el ) => app.icon( el.$iconClass(), options.label ),
      $display: options.display,
      $update: (el) => (display) => {
        el.$display = display
        el.$render()
      },
      $iconClass: (el) => () => el.$display ?
      'fa fa-caret-down' : 'fa fa-caret-right',
    }),
    onclick: (el) => (e) => el.$('^').$toggle(),
    class: 'btn app-btn',
    ...options.button,
  } ),
  a['app-collapse-body'](
    options.body,
    {
      ...options.bodyTag,
      style: {
        display: options.display ? 'unset': 'none',
        ...( options.bodyTag || {} ).style,
      }
    }
  ),
], {
  $display: options.display,
  $toggle: (el) => () => { el.$update(!el.$display) },
  $update: (el) => (display) => {
    el.$('app-collapse-indicator').$update(display)
    el.$render()
    let body = el.$('app-collapse-body')
    if ( display ) {
      x.lib.animate.fade.in( body )
      let firstControl = el.$$('|appkit-form-control').$$[0]
      if ( firstControl ) {
        firstControl.$focus()
      }
      // SimpleMDE needs to be refreshed when it appears.
      el.$$('|appkit-form-simplemde').$refresh()
    } else {
      x.lib.animate.fade.out( body )
    }
  },
  ...options.collapseTag
} )
