app.docker.containers.instructions = () => a['app-docker-containers-instructions']([
  a['app-docker-containers-instruct-buttons']([
    ['Start', 'toggle_start', 'fas fa-play'],
    ['Pause', 'toggle_pause', 'fas fa-pause'],
    ['Stop', 'stop', 'fas fa-stop'],
    ['Kill', 'kill', 'fas fa-eject'],
  ].map((instruction) => app.button({
    label: app.icon(instruction[2]),
    title: instruction[0],
    onclick: (e, el) => {
      e.stopPropagation()
      e.currentTarget.$('^app-docker-containers-container app-docker-containers-fetch').$fetch(instruction[1])
    },
    class: 'btn app-btn',
  }))),
])
