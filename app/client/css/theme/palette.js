app.theme.palette = (name, colors, options) => app.theme({
  name: name,
  color: colors.text1,
  backgroundColor: colors.bg1,
  background: options.gradient ? `linear-gradient(to bottom, ${colors.bg2}, ${colors.bg1})` : undefined,

  placeholderColor: colors.text2,
  borderColor: colors.outline,
  errorColor: colors.error,
  infoColor: colors.info,
  warnColor: colors.warn,
  successColor: colors.success,
  controlBoxShadowColor: colors.outline,

  buttonColor: colors.text1,
  buttonBackgroundColor: colors.bg2,
  buttonColorActive: colors.text2,
  buttonBackgroundColorActive: colors.bg2,
  buttonColorHover: colors.text2,
  buttonBackgroundColorHover: colors.bg2,

  navbarBackgroundColor: colors.bg2,
  navbarBrandColor: colors.text1,
  navbarButtonColor: colors.text1,
  navbarButtonColorActive: colors.text2,
  navbarButtonColorHover: colors.text2,

  outColor: colors.text2,
  outNullColor: colors.attention,
  outNumberColor: colors.attention,
  outBooleanColor: colors.attention,
  outTextColor: colors.text1,
})
