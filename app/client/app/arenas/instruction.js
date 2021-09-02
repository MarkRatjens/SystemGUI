app.arenas.instruction = (route) => (a,x) => a.div([
  a.h3(`Instruction`),
  app.form({
    url: `/api/arenas/@${route.params.arenaIdentifier}/instruction`,
    method: "POST",
    form: (f) => [
      f.field({
        key: 'command',
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
    success: (result) => route.open('follow', {command: result.command}),
  }),
]);
