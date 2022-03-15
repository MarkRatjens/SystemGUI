app.docker.container.instructions = () => a['app-docker-container-instructions']([
  a['app-docker-container-instruct-buttons']([
    ['Start', '/instruct/start', 'fas fa-play'],
    ['Pause', '/instruct/pause', 'fas fa-pause'],
    ['Stop', '/instruct/stop', 'fas fa-stop'],
    ['Kill', '/instruct/kill', 'fas fa-eject'],
  ].map((instruction) => app.button({
    label: app.icon(instruction[2]),
    title: instruction[0],
    onclick: (e, el) => {
      e.stopPropagation()
      el.$('^app-docker-container app-docker-container-fetch').$fetch(instruction[1])
    },
    class: 'btn app-btn',
  }))),
])
