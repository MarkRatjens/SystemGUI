ax.css({
  '.app-dashboard': {
    '.app-dashboard-item-heading': {
      $: {
        cursor: 'pointer',
      },
    },
    '.app-dashboard-item-commands': {
      $: {
        display: 'none',
      },
      '&.active': {
        $: {
          display: 'block',
        }
      }
    },
  }
})
