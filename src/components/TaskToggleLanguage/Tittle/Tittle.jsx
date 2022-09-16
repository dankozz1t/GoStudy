import React from 'react';

import { useLanguages } from 'hooks/useLanguages';

export const Tittle = () => {
  const { currentLanguage } = useLanguages();
  return (
    <>
      <h2>{currentLanguage.greeting}</h2>
    </>
  );
};
