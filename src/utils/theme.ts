export default class themeChangerClass {
  isLight: boolean
  /**
   * @constructor
   */
  constructor(isLight: boolean) {
    this.isLight = isLight
  }
  _addLightTheme() {
    const lightThemeLinkEl = document.createElement('link')
    lightThemeLinkEl.setAttribute('rel', 'stylesheet')
    lightThemeLinkEl.setAttribute('href', './css/light.css')
    lightThemeLinkEl.setAttribute('id', 'light-theme-style')
    const docHead = document.querySelector('head')
    docHead?.append(lightThemeLinkEl)
    this.isLight = true
  }
  _removeLightTheme() {
    const lightThemeLinkEl = document.querySelector('#light-theme-style')
    const parentNode = lightThemeLinkEl?.parentNode
    // @ts-ignore
    parentNode?.removeChild(lightThemeLinkEl)
    this.isLight = false
  }
  _lightThemeSwitch() {
    const lightThemeLinkEl = document.querySelector('#light-theme-style')
    if (!lightThemeLinkEl) {
      this._addLightTheme()
    } else {
      this._removeLightTheme()
    }
  }
  _isLightTheme() {
    return this.isLight
  }
}
