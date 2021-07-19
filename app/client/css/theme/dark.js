ax.style({
  "body.app-theme-dark": {
    color: "#EEE",
    backgroundColor: "#333",

    ".app-btn": {
      color: "lightgray",
    },

    ".app-btn.active": {
      color: "black",
    },

    ".app-btn:hover": {
      color: "black",
    },

    "app-nav": {
      ".app-nav-btn.active": {
        color: "black",
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

    ".well": {
      borderColor: "#333",
    },

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


    'app-modal .modal-content' : {
      backgroundColor:'#333',
    },
  },

});
