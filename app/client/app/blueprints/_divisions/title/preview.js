app.blueprints.title.preview = (router, blueprint) => (a,x) =>
blueprint.title ? a.h1(blueprint.title) : null
