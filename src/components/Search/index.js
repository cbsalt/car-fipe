import React from 'react';

import { Container } from './styles';

function Search({
  title, placeholder, value, onChange,
}) {
  return (
    <Container>
      <h3>{title}</h3>
      <div>
        <input
          type="text"
          value={value}
          onChange={onChange}
        />
        <span>{placeholder}</span>
      </div>
    </Container>
  );
}

export default Search;
