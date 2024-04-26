import { useMediaQuery } from "react-responsive";
import "./LanguageSwitcher.css"
import { useState } from "react";

export const LanguageSwitcher = ({onLocaleChange }) => {
  const [locales] = useState([ 'az-Latn', 'en', 'ru-RU' ])
  const [selectedLocale, setSelectedLocale] = useState('az-Latn')

  const isSmallDesktopOrTabletOrMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });

  // function setLang() {
  //   setLocale(window.locales.value);
  // }

  const handleLocaleChange = (event) => {
    const newLocale = event.target.value;
    setSelectedLocale(newLocale);
    onLocaleChange(newLocale);
  };

  return (
    <div className="language-switcher-container">
      <select value={selectedLocale} name="locales" id="locales" className="locales-box" onChange={handleLocaleChange}>
        {locales.map(locale=>(
          <option key={locale} value={locale}>
            {locale.substring(0,2).toUpperCase()}
        </option>
        ))}
      </select>
    </div>
  );
};
