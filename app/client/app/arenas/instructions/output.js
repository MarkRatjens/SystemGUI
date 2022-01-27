app.arenas.instructions.output = (route) => (a,x) => app.stream({
  label: ['Instructing', route.params.instruction, 'Terraform'],
  url: `/api/streaming/arenas/${route.params.instruction}`,
  done: () => route.open('.'),
})
