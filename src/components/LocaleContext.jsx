import { createContext, useState, useContext } from "react"
import i18n from "i18next"

const LocaleContext = createContext()
export const useLocale = () => useContext(LocaleContext)

const LocaleProvider = ({children}) => {
  const [locale, setLocale] = useState(i18n.language) //Default Locale

  const changeLocale = (newLocale) => {
    setLocale(newLocale)
    i18n.changeLanguage(newLocale)
  }
  return (
    <LocaleContext.Provider value={{locale, changeLocale}}>
      {children}
    </LocaleContext.Provider>
  )
}
export default LocaleProvider