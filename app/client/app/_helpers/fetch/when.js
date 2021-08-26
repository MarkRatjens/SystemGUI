app.fetch.when = (options) => ({
  401: (response, el) => {el.$send("app.signedout"); return []},
  418: (response, el) => {el.$send("app.timedout"); return []},
  503: (response, el) => {el.$send("app.disconnected"); return []},
  500: (response, el) => {
    let showModal = () => modal.$open({
      size: 'lg',
      title: ax.a['.error'](app.icon('fa fa-bug', 'Server exception!')),
      body: ax.a.pre(response),
    })
    showModal()
    return ax.a.p(app.button({
      label: app.icon('fa fa-bug', 'Server exception!'),
      onclick: showModal,
      class: 'btn btn-danger',
    }))
  },
  ...options,
})
