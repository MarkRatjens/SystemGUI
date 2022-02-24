app.fetch = (options = {}) => x.fetch({
  catch: (e, el) => {el.$send("app.disconnected")},
  ...options,
  success: app.fetch.success(options.success),
  when: app.fetch.when(options.when),
});
