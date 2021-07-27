ax.style({
  "body.app-theme-dark": {
    color: "#EEE",
    backgroundColor: "#333",

    ".app-btn": {
      backgroundColor: '#555',
      color: "lightgray",
    },

    ".app-btn.active": {
      backgroundColor: '#999',
      color: "black",
    },

    ".app-btn:hover": {
      backgroundColor: '#777',
    },

    'ax-appkit-panes': {
      'ax-appkit-panes-proximate': {
        backgroundColor: '#555',
      },
    },

    hr: {
      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    },

    "ax-appkit-menu menu": {
      backgroundColor: "black",
    },

    pre: {
      color: "lightgray",
    },

    '.error': {
      color: "pink",
      pre: {
        color: "pink",
      },
    },

    ".form-control:focus, .custom-select:focus": {
      boxShadow: "0 0 0 .2rem #90F9",
    },
    ".custom-control-input:focus ~ .custom-control-label::before": {
      boxShadow: "0 0 0 .2rem #90F9",
    },

    ".table": {
      color: "lightgray",
    },

    ".success": { color: "lightblue" },
    ".success pre": { color: "lightblue" },

    // ".well": {
    //   borderColor: "lightgray",
    // },

    '.navbar.navbar-light': {
      '.navbar-nav': {
        '.nav-link': {
          color: '#EEE',
        },
        '.nav-item.active': {
          '.nav-link': {
            color: '#FFF',
          },
        },
      },
      '.navbar-brand': {
        color: '#EEE',
      },
    },

    "ax-panes": {
      "ax-panes-drag": {
        background: "#FFF1",
        "&:hover": {
          background: "#333",
        },
      },

      "&.dragable": {
        "ax-panes-drag": {
          background: "#666",
        },
      },

      "> *": {
        borderTop: "1px solid #FFF1",
      },
    },
    'app-inplace-open-foreground': {
      backgroundColor:'#333',
    },
    'app-inplace-open-background': {
      backgroundColor:'#6669',
    },

    'app-modal': {
      '.modal-content': {
        backgroundColor:'#333',
      },
      '.close': {
        color: 'lightgray',
      }
    },

    'ax-appkit-report .form-control': {
      color: '#FFF !important',
    },
  },

});
