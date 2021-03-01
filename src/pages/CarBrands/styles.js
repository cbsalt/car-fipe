import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  min-height: 100vh;
  padding: 32px 48px;

  h2 {
    color: #646464;
  }

  a {
    text-decoration: none;
  }
`;

export const WrapperCards = styled.div`
  margin-top: 32px;
  justify-items: center;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`;

export const BrandCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 180px;
  background: #f2f4f6;
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  justify-content: center;
  padding: 0 15px;

  span {
    text-align: center;
    font-size: 20px;
    color: #2e2e2e;
    text-transform: uppercase;
  }

  &:hover {
    transform: scale(1.04);
    transition: 0.4s;
    cursor: pointer;
    background: #2d248a;

    span {
      color: #fff;
    }
  }

  @media (max-width: 640px) {
    width: 20rem;
    height: 4rem;
  }
`;
