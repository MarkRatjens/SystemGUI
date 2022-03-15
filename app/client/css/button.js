ax.css({
  ".app-btn": {
    $: {
      position: 'relative',
    },
    '&:before': {
      $: {
        content: "''",
        display: 'block',
        position: 'absolute',
        left: '0px',
        right: '0px',
        top: '0px',
        height: '100%',
      }
    },
    "&.active, &:focus": {
      $: {
        zIndex: 100,
      }
    },
  },
})
