import React from 'react';

import { useLanguages } from 'hooks/useLanguages';

import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Switch = () => {
  const { setLanguage, langList } = useLanguages();

  const handleChange = ({ target: { value } }) => {
    setLanguage(value);
  };

  return (
    <Form.Select aria-label="Default select example" onChange={handleChange}>
      {langList.map(langItem => (
        <option key={langItem} value={langItem}>
          {langItem}
        </option>
      ))}
    </Form.Select>
  );
};
