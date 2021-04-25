app.when = (options) => ({
  401: (response, el) => {el.$send("app.unauthenticated")},
  418: (response, el) => {el.$send("app.timeout")},
  503: (response, el) => {el.$send("app.disconnected")},
  500: (response, el) => {
    let showModal = () => modal.$open({
      size: 'lg',
      title: ax.a['.error'](app.icon('fa fa-bug', 'Server exception!')),
      body: ax.a.pre(response),
    })
    showModal()
    return app.button({
      label: app.icon('fa fa-bug', 'Server exception!'),
      onclick: showModal,
      class: 'btn btn-danger',
    })
  },
  ...options,
})
