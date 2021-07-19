ax.style({
  'app-clickable': {
    display: 'block',
  },
  'app-clickable, .app-clickable': {
    cursor: 'pointer',
    '*': {
      cursor: 'pointer',
    },
    '&:hover': {
      // backgroundColor: '#EEE9',
      boxShadow: '0px 0px 10px gray',
    }
  },
})
