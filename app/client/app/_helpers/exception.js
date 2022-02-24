app.exception = (message) => {
  let showModal = () => modal.$open({
    size: 'lg',
    title: ax.a['.error'](app.icon('fa fa-bug', 'Server exception!')),
    body: ax.a.pre(message),
  })
  showModal()
  return ax.a.p(app.button({
    label: app.icon('fa fa-bug', 'Server exception!'),
    onclick: (e, el) => showModal(),
    class: 'btn btn-danger',
  }))
}
