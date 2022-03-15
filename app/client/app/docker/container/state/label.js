app.docker.container.state.label = (status) => {
  let label = (icon, text='', color='') => a.span([
    app.icon(
      icon,
      '',
      {iconTag: {style: {color: color}}}
    ),
    ` ${text}`
  ])

  switch(status) {
    case 'created':
    return label('fas fa-stop-circle', 'Created', 'blue')
    case 'restarting':
    return label('far fa-play-circle', 'Restarting', 'purple')
    case 'running':
    return label('fas fa-play-circle', 'Running', 'green')
    case 'paused':
    return label('fas fa-pause-circle', 'Paused', 'darkorange')
    case 'exited':
    return label('fas fa-stop-circle', 'Exited', 'grey')
    case 'dead':
    return label('fas fa-times-circle', 'Dead', 'red')
    default:
    return label('fas fa-circle')
  }
}
