import React, { createContext, useState } from 'react';

import en from '../../../languages/en.json';
import uk from '../../../languages/uk.json';
import ru from '../../../languages/ru.json';

export const LanguageContext = createContext();

export function LanguageContextProvider({ children }) {
  const lang = {
    en,
    uk,
    ru,
  };

  const [currentLanguage, setCurrentLanguage] = useState(lang.en);

  const setLanguage = value => {
    setCurrentLanguage(lang[value]);
  };

  return (
    <LanguageContext.Provider
      value={{ langList: Object.keys(lang), currentLanguage, setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
