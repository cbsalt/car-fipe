import React, { useEffect, useState } from 'react';

import Search from '../../components/Search';

import { Container, WrapperCards, BrandCard } from './styles';

import api from '../../services/api';

function CarBrands() {
  const [brands, setBrands] = useState([]);
  const [searchBrand, setSearchBrand] = useState('');

  useEffect(() => {
    async function LoadBrands() {
      const response = await api.get('marcas');

      const carBrands = response.data;
      const carBrandsFiltered = carBrands.filter(
        (carBrand) => carBrand.nome.toLowerCase().includes(searchBrand.toLowerCase()),
      );

      setBrands(carBrandsFiltered);
    }

    LoadBrands();
  }, [searchBrand]);

  function handleSearch({ target }) {
    setSearchBrand(target.value);
  }

  return (
    <Container>
      <Search
        title="Marcas de a-z"
        placeholder="Digite o fabricante"
        id="Search"
        value={searchBrand}
        onChange={handleSearch}
      />
      <WrapperCards className="animeLeft">
        {brands.map((brand) => (
          <a
            key={brand.codigo}
            href={`/models/${brand.codigo}`}
            onClick={() => setSearchBrand('')}
          >
            <BrandCard>
              <span>{brand.nome}</span>
            </BrandCard>
          </a>
        ))}
      </WrapperCards>
    </Container>
  );
}

export default CarBrands;
