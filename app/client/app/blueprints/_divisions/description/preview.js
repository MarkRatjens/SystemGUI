app.blueprints.description.preview = (router, blueprint) => (a,x) =>
blueprint.description ? app.md(blueprint.description) : null
