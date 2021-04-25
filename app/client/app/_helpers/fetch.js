app.fetch = (options = {}) => (a, x) => x.fetch({
  url: options.route,
  catch: options.catch || ((error, el) => {el.$send("app.disconnected")}),
  ...options,
  // TODO: Use a custom success handler once Spaces is returning a consistent result object.
  // success: (result, el) => {
  //   let error
  //   let data
  //   if (ax.is.array(result)) {
  //     data = []
  //     for (let i in result) {
  //       if (result[i].status == 'ok') {
  //         data[i] = result[i].details
  //       } else {
  //         error = result[i].details
  //         break
  //       }
  //     }
  //   } else {
  //     if (result.status == 'ok') {
  //       data = result.details
  //     } else {
  //       error = result.details
  //     }
  //   }
  //   if (error) return a['pre.error'](error)
  //
  //   if (options.success) {
  //     return options.success(data, el)
  //   } else {
  //     return data
  //   }
  // },
  when: app.when(options.when),
});
