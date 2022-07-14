ax.css({
  '.app-dashboard': {
    '.app-dashboard-item-heading': {
      $: {
        cursor: 'pointer',
      },
    },
    '.app-dashboard-item-menu': {
      $: {
        display: 'block',
        opacity: 0,
        maxHeight: '0px',
        overflow: 'hidden',
        transition: `
        max-height 0.25s cubic-bezier(0, 1, 0, 1) 0s,
        opacity 0.25s ease-out
        `,
      },
      '&.active': {
        $: {
          opacity: 1,
          maxHeight: '99999px',
          overflow: 'auto',
          transition: `
          max-height 0.25s cubic-bezier(1, 0, 1, 0) 0s,
          opacity 0.25s ease-in
          `,
        }
      }
    },
  }
})
