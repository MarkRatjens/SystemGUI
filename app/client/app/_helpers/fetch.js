app.fetch = (options = {}) => x.fetch({
  catch: (e) => {
    e.currentTarget.$send("app.disconnected")
    return ''
  },
  ...options,
  success: app.fetch.success(options.success, options.warnings),
  when: app.fetch.when(options.when),
});
