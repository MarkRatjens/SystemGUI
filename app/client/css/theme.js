app.theme = (theme) => {
  let style = {}

  let nameClass = theme.name ? `.app-theme-${theme.name}` : ''

  style[`body${nameClass}`] = {
    backgroundColor: theme.backgroundColor,
    background: theme.background,
    color: theme.color,
    ".app-btn": {
      color: theme.buttonColor,
      backgroundColor: theme.buttonBackgroundColor,
      "&.active": {
        backgroundColor: theme.buttonBackgroundColorActive,
        color: theme.buttonColorActive,
      },
      "&:hover": {
        backgroundColor: theme.buttonBackgroundColorHover,
        color: theme.buttonColorHover,
      },
    },
    'ax-appkit-panes': {
      'ax-appkit-panes-proximate': {
        backgroundColor: theme.buttonBackgroundColor,
      },
    },
    '.border': {
      border: `1px solid ${theme.borderColor} !important`,
    },
    hr: {
      borderTopColor: theme.borderColor,
    },
    pre: {
      color: theme.color,
    },
    'app-modal': {
      '.modal-content': {
        backgroundColor: theme.backgroundColor,
      },
      '.close': {
        color: theme.color,
      }
    },
    '.error': {
      color: theme.errorColor,
      pre: {
        color: theme.errorColor,
      },
    },
    '.success': {
      color: theme.successColor,
      pre: {
        color: theme.successColor,
      },
    },
    ".form-control:focus, .custom-select:focus": {
      boxShadow: `0 0 0 .2rem ${theme.controlBoxShadowColor}`,
    },
    ".custom-control-input:focus ~ .custom-control-label::before": {
      boxShadow: `0 0 0 .2rem ${theme.controlBoxShadowColor}`,
    },
    '.table': {
      color: theme.color,
      'td': {
        borderTop: `1px solid ${theme.borderColor}`
      },
    },
    '.well': {
      border: `1px solid ${theme.borderColor}`,
    },
    '.navbar.navbar-light': {
      backgroundColor: theme.navbarBackgroundColor,
      '.navbar-nav': {
        '.nav-link': {
          color: theme.navbarButtonColor,
        },
        '.nav-item.active': {
          '.nav-link': {
            color: theme.navbarButtonColorActive,
          },
          'app-icon': {
            borderBottom: `1px solid ${theme.borderColor}`,
          },
        },
        '.nav-item:hover': {
          '.nav-link': {
            color: theme.navbarButtonColorHover,
          },
        },
      },
      '.navbar-brand': {
        color: theme.navbarBrandColor,
      },
      '.navbar-brand.active': {
        color: theme.navbarButtonColorActive,
      },
      '.navbar-brand:hover': {
        color: theme.navbarButtonColorHover,
      },
    },
    'ax-appkit-report .form-control': {
      color: `${theme.color} !important`,
    },
    axAppkitPanes: {
      '&.dragable': {
        axAppkitPanesDrag: {
          backgroundColor: theme.borderColor,
        },
      },
      '> *': {
        borderTop: `1px solid ${theme.borderColor}`,
      },
    },
    'app-clickable:hover, .app-clickable:hover': {
      boxShadow: `0px 0px 10px ${theme.borderColor}`,
    },
    "ax-appkit-out": {
      color: theme.outColor,
      "ax-appkit-out-null": {
        color: theme.outNullColor,
      },
      "ax-appkit-out-number": {
        color: theme.outNumberColor,
      },
      "ax-appkit-out-boolean": {
        color: theme.outBooleanColor,
      },
      "ax-appkit-out-text": {
        color: theme.outTextColor,
      }
    },
    '.placeholder': {
      color: theme.placeholderColor,
    },
    '.form-control::placeholder, .CodeMirror-placeholder, .custom-select.placeholder': {
      color: 'gray !important',
    },
    '.app-tabs': {
      '.nav-item': {
        color: theme.color,
      },
    },
  }

  ax.style(style)
}
