app.fetch.success = (success, warnings) => (payload, el) => {

  let warningsFor = (messages) => warnings
    ? warnings(messages)
    : a['pre.error.m-0.p-1'](messages.join('\n'))

  if (ax.is.array(payload)) {
    let results = []
    for (let item of payload) {
      if (item.errors) return warningsFor(item.errors)
      results.push(item.result)
    }
    if (success) {
      let node = success(results, el)
      return ax.is.undefined(node) ? '' : node
    } else {
      return a['pre.success.m-0.p-1'](JSON.stringify(results, null, 2))
    }
  } else {
    if (payload.errors) return warningsFor(payload.errors)
    if (success) {
      let node = success(payload.result, el)
      return ax.is.undefined(node) ? '' : node
    } else {
      return a['pre.success.m-0.p-1'](JSON.stringify(payload.result, null, 2))
    }
  }
}
