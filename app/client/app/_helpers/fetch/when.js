app.fetch.when = (options) => ({
  401: (response, el) => {el.$send("app.signedout"); return []},
  418: (response, el) => {el.$send("app.timedout"); return []},
  503: (response, el) => {el.$send("app.disconnected"); return []},
  500: app.exception,
  ...options,
})
