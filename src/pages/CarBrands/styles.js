import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  min-height: 100vh;
  background: #edf7fe;
  padding: 20px;

  h2 {
    color: #646464;
    padding-bottom: 28px;
    border-bottom: 1px solid #d3d3d3;
  }
`;

export const WrapperCards = styled.div`
  margin: 32px;
  justify-items: center;
  display: grid;
  grid-gap: 30px 8px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export const BrandCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px 2px rgba(0,0,0,0.1);
  justify-content: center;

  span {
    text-align: center;
    font-size: 32px;
    color: #2e2e2e;
  }

  &:hover {
    transform: scale(1.04);
    transition: 0.4s;
    cursor: pointer;
  }
`;
