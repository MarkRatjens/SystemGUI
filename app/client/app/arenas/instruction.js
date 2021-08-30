app.arenas.instruction = (route) => (a,x) => a.div([
  a.h3(`Instruction`),
  app.form({
    url: `/api/arenas/@${route.params.arenaIdentifier}/instruction`,
    method: "POST",
    form: (f) => [
      f.field({
        key: 'instruction',
        as: 'select',
        label: false,
        placeholder: 'Select an instruction',
        selections: {
          init: 'Initialize',
          plan: 'Plan',
          apply: 'Apply',
        },
      }),
      f.buttons({route: route})
    ],
    success: (instruction) => route.open('follow', {instruction: instruction}),
  }),
]);
