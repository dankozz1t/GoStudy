import { useContext } from 'react';
import { LanguageContext } from '../components/TaskToggleLanguage/Context/Context';

export const useLanguages = () => {
  return useContext(LanguageContext);
};
