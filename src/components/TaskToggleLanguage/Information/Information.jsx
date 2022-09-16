import React from 'react';

import { useLanguages } from 'hooks/useLanguages';

export const Information = () => {
  const { currentLanguage } = useLanguages();
  return (
    <>
      <h2>{currentLanguage.info}</h2>
    </>
  );
};
