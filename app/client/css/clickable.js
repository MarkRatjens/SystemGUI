ax.css({
  'app-clickable': {
    $: {
      display: 'block',
    }
  },
  'app-clickable, .app-clickable': {
    $: {
      cursor: 'pointer',
    },
    '*': {
      $: {
        cursor: 'pointer',
      },
    },
  },
})
