app.theme = (theme) => {

  let style = {}

  let nameClass = theme.name ? `.app-theme-${theme.name}` : ''

  style[`body${nameClass}`] = {
    $: {
      backgroundColor: theme.backgroundColor,
      background: theme.background,
      color: theme.color,
    },
    '.app-btn': {
      $: {
        color: theme.buttonColor,
        backgroundColor: theme.buttonBackgroundColor,
      },
      '&.active': {
        $: {
          backgroundColor: theme.buttonBackgroundColorActive,
          color: theme.buttonColorActive,
        },
      },
      '&:hover': {
        $: {
          backgroundColor: theme.buttonBackgroundColorHover,
          color: theme.buttonColorHover,
        },
      },
    },
    '.border': {
      $: {
        border: `1px solid ${theme.borderColor} !important`,
      },
    },
    hr: {
      $: {
        borderTopColor: theme.borderColor,
      },
    },
    pre: {
      $: {
        color: theme.color,
      },
    },
    'app-modal': {
      '.modal-content': {
        $: {
          backgroundColor: theme.backgroundColor,
        },
      },
      '.modal-body': {
        $: {
          overflowX: 'scroll',
        },
      },
      '.close': {
        $: {
          color: theme.buttonColor,
          textShadow: `0 1px 0 ${theme.controlBoxShadowColor}`,
        },
      }
    },
    '.error': {
      $: {
        color: theme.errorColor,
      },
      // pre: {
      //   $: {
      //     color: theme.errorColor,
      //   },
      // },
    },
    '.warn': {
      $: {
        color: theme.warnColor,
      },
      // pre: {
      //   $: {
      //     color: theme.warnColor,
      //   },
      // },
    },
    '.info': {
      $: {
        color: theme.infoColor,
      },
      // pre: {
      //   $: {
      //     color: theme.infoColor,
      //   },
      // },
    },
    '.success': {
      $: {
        color: theme.successColor,
      },
      // pre: {
      //   $: {
      //     color: theme.successColor,
      //   },
      // },
    },
    '.background-error': {
      $: {
        color: theme.backgroundColor,
        backgroundColor: theme.errorColor,
      },
      // pre: {
      //   $: {
      //     color: theme.errorColor,
      //   },
      // },
    },
    '.background-warn': {
      $: {
        color: theme.backgroundColor,
        backgroundColor: theme.warnColor,
      },
      // pre: {
      //   $: {
      //     color: theme.warnColor,
      //   },
      // },
    },
    '.background-info': {
      $: {
        color: theme.backgroundColor,
        backgroundColor: theme.infoColor,
      },
      // pre: {
      //   $: {
      //     color: theme.infoColor,
      //   },
      // },
    },
    '.background-success': {
      $: {
        color: theme.backgroundColor,
        backgroundColor: theme.successColor,
      },
      // pre: {
      //   $: {
      //     color: theme.successColor,
      //   },
      // },
    },
    '.form-control:focus, .custom-select:focus': {
      $: {
        boxShadow: `0 0 0 .2rem ${theme.controlBoxShadowColor}`,
      },
    },
    '.custom-control-input:focus ~ .custom-control-label::before': {
      $: {
        boxShadow: `0 0 0 .2rem ${theme.controlBoxShadowColor}`,
      },
    },
    '.table': {
      $: {
        color: theme.color,
      },
      'td': {
        $: {
          borderTop: `1px solid ${theme.borderColor}`
        },
      },
    },
    '.well': {
      $: {
        border: `1px solid ${theme.borderColor}`,
      },
    },
    '.navbar.navbar-light': {
      $: {
        backgroundColor: theme.navbarBackgroundColor,
      },
      '.navbar-nav': {
        '.nav-link': {
          $: {
            color: theme.navbarButtonColor,
          },
        },
        '.nav-item.active': {
          '.nav-link': {
            $: {
              color: theme.navbarButtonColorActive,
            },
          },
          'app-icon': {
            $: {
              borderBottom: `1px solid ${theme.navbarButtonColorActive}`,
            },
          },
        },
        '.nav-item:hover': {
          '.nav-link': {
            $: {
              color: theme.navbarButtonColorHover,
            },
          },
        },
      },
      '.navbar-brand': {
        $: {
          color: theme.navbarBrandColor,
        },
      },
      '.navbar-brand.active': {
        $: {
          color: theme.navbarButtonColorActive,
        },
      },
      '.navbar-brand:hover': {
        $: {
          color: theme.navbarButtonColorHover,
        },
      },
    },
    'ax-appkit-report .form-control': {
      $: {
        color: `${theme.color} !important`,
      },
    },
    'ax-appkit-report .custom-control-label': {
      $: {
        color: `${theme.color} !important`,
      },
    },
    'ax-appkit-panes': {
      'ax-appkit-panes-proximate': {
        $: {
          backgroundColor: theme.buttonBackgroundColor,
        },
      },
      '&.dragable': {
        'ax-appkit-panes-drag': {
          $: {
            backgroundColor: theme.borderColor,
          },
        },
      },
      '> *': {
        $: {
          borderTop: `1px solid ${theme.borderColor}`,
        },
      },
    },
    'app-clickable:hover, .app-clickable:hover': {
      $: {
        boxShadow: `0px 0px 10px ${theme.borderColor}`,
      },
    },
    'ax-appkit-out': {
      $: {
        color: theme.outColor,
      },
      'ax-appkit-out-null': {
        $: {
          color: theme.outNullColor,
        },
      },
      'ax-appkit-out-number': {
        $: {
          color: theme.outNumberColor,
        },
      },
      'ax-appkit-out-boolean': {
        $: {
          color: theme.outBooleanColor,
        },
      },
      'ax-appkit-out-text': {
        $: {
          color: theme.outTextColor,
        },
      }
    },
    '.placeholder': {
      $: {
        color: theme.placeholderColor,
      },
    },
    '.form-control::placeholder, .CodeMirror-placeholder, .custom-select.placeholder': {
      $: {
        color: 'gray !important',
      },
    },
    '.app-tabs': {
      '.nav-item': {
        $: {
          color: theme.color,
        },
      },
    },
    'ax-appkit-context-popup': {
    },
    'ax-appkit-menu': {
      'ax-appkit-menu-item button': {
        '&:hover': {
          $: {
            color: theme.buttonColorHover,
            backgroundColor: theme.buttonBackgroundColorHover,
          },
        },
        $: {
          color: theme.buttonColor,
          backgroundColor: theme.buttonBackgroundColor,
          boxShadow: `0px 0px 5px ${theme.controlBoxShadowColor}`,
        },
      },
    },
    'ax-appkit-xtermjs': {
      'ax-appkit-xtermjs-toolbar': {
        $: {
          color: '#333',
        },
      },
    },
    '.app-dashboard': {
      '.app-dashboard-item-heading': {
        $: {
          display: 'block',
        },
        '&:hover': {
          $: {
            backgroundColor: theme.buttonBackgroundColor,
          },
        }
      }
    },
    '.stream-message' : {
      $: {
        border: `1px solid ${theme.borderColor}`,
        fontFamily: 'monospace',
      },
    },
    '.border, .border-top, .border-bottom, .border-left, .border-right': {
      $: {
        borderColor: `${theme.borderColor} !important`,
      }
    },
    '.nav-link.active, .nav-tabs, .nav-link:hover': {
      $: {
        borderColor: `${theme.borderColor} !important`,
      }
    },
    '.nav-link.active': {
      $: {
        color: `${theme.buttonColor} !important`,
        backgroundColor: `${theme.buttonBackgroundColor} !important`,
      }
    },
  }

  ax.css(style)
}
