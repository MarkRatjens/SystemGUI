app.fetch = (options = {}) => (a, x) => x.fetch({
  catch: (el) => (e) => {el.$send("app.disconnected")},
  ...options,
  success: app.fetch.success(options.success),
  when: app.fetch.when(options.when),
});
