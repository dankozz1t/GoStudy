import React from 'react';
import Albums from './Albums/Albums';
import Products from './Products/Products';

import { LanguageContextProvider } from './TaskToggleLanguage/Context/Context';
import { Switch } from './TaskToggleLanguage/Switch/Switch';
import { Tittle } from './TaskToggleLanguage/Tittle/Tittle';
import { Information } from './TaskToggleLanguage/Information/Information';

export const App = () => {
  const getAlbums = true;
  const getProducts = true;

  return (
    <div>
      <LanguageContextProvider>
        <Switch />
        <Tittle />
        <Information />

        {getAlbums && <Albums />}
        {getProducts && <Products />}
      </LanguageContextProvider>
    </div>
  );
};
