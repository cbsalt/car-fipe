import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import Search from '../../components/Search';

import { Container, WrapperCards, BrandCard } from './styles';

import api from '../../services/api';

function CarBrands() {
  const [brands, setBrands] = useState([]);
  const [searchBrand, setSearchBrand] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function LoadBrands() {
      setLoading(true);
      const response = await api.get('marcas');

      const carBrands = response.data;
      const carBrandsFiltered = carBrands.filter(
        (carBrand) => carBrand.nome.toLowerCase().includes(searchBrand.toLowerCase()),
      );

      setLoading(false);
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
        {loading && brands.length < 1 && (
          <Loader type="ThreeDots" color="#483d8b" height={80} width={80} />
        )}
        {brands.map((brand) => (
          <Link
            key={brand.codigo}
            to={`/models/${brand.codigo}`}
            onClick={() => setSearchBrand('')}
          >
            <BrandCard>
              <span>{brand.nome}</span>
            </BrandCard>
          </Link>
        ))}
      </WrapperCards>
    </Container>
  );
}

export default CarBrands;
