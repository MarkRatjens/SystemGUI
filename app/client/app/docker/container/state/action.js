app.docker.container.state.action = (action) => {
  if (!action) return ''
  return a.small(
    ` ${action}`,
    {
      $init: (el) => setTimeout(el.$out, 1000),
      $out: (el) => () => x.lib.animate.fade.out(el)
    }
  )
}
