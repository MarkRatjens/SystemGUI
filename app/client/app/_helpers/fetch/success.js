app.fetch.success = (success) => (payload, el) => {
  let a = ax.a
  if (ax.is.array(payload)) {
    let results = []
    for (let item of payload) {
      if (item.errors) return a['pre.error'](item.errors)
      results.push(item.result)
    }
    if (success) {
      return success(results, el)
    } else {
      return a['pre.success'](JSON.stringify(results, null, 2))
    }
  } else {
    if (payload.errors) return a['pre.error'](payload.errors)
    if (success) {
      return success(payload.result, el)
    } else {
      return a['pre.success'](JSON.stringify(payload.result, null, 2))
    }
  }
}
