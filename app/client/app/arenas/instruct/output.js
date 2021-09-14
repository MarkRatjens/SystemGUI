app.arenas.instruct.output = (route) => (a,x) => app.stream({
  label: ['Instructing', route.params.instruction, 'Terraform'],
  url: `/api/outputting/@${route.params.arenaIdentifier}/apply`,
  route: route,
})
