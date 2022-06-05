import { useEffect } from 'react'

const useDocumentThemeColor = (color: string) => {
  useEffect(() => {
    const appTheme = document.querySelector('meta[name=theme-color]')
    appTheme?.removeAttribute('content')
    appTheme?.setAttribute('content', `${color}`)
  }, [color])
}

export default useDocumentThemeColor
