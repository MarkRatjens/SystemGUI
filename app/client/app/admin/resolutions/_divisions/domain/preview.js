app.admin.resolutions.domain.preview = (router, resolution) => (a,x) =>
resolution.domain ? a.h3(resolution.domain.identifier) : null
