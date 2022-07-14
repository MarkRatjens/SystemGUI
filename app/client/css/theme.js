app.theme = (theme) => {

  let style = {
    body: {
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
          '&:hover': {
            $: {
              color: theme.buttonColorHover,
            },
          }
        }
      },
      '.error': {
        $: {
          color: theme.errorColor,
        },
      },
      '.warn': {
        $: {
          color: theme.warnColor,
        },
      },
      '.info': {
        $: {
          color: theme.infoColor,
        },
      },
      '.success': {
        $: {
          color: theme.successColor,
        },
      },
      '.bordered-error': {
        $: {
          color: theme.errorColor,
          border: `1px solid ${theme.errorColor}`,
        },
      },
      '.bordered-warn': {
        $: {
          color: theme.warnColor,
          border: `1px solid ${theme.warnColor}`,
        },
      },
      '.bordered-info': {
        $: {
          color: theme.infoColor,
          border: `1px solid ${theme.infoColor}`,
        },
      },
      '.bordered-success': {
        $: {
          color: theme.successColor,
          border: `1px solid ${theme.successColor}`,
        },
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
          backgroundColor: theme.buttonBackgroundColorHover,
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
              backgroundColor: theme.buttonBackgroundColorHover,
            },
          }
        }
      },
      '.app-stream-message' : {
        $: {
          // border: `1px solid ${theme.borderColor}`,
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
  }

  let sheet = ax.css.sheet(style)
  if (theme.name) {
    ax.css(`@media (prefers-color-scheme: ${theme.name}) {${sheet}}`)
  } else {
    ax.css(sheet)
  }
}
