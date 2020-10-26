import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  min-height: 100vh;
  background: #edf7fe;
  padding: 20px;
`;

export const WrapperCards = styled.div`
  display: flex;
  margin: 20px 40px;
`;

export const BrandCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 240px;
  width: 200px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 2px rgba(0,0,0,0.1);
  margin-right: 16px;
  align-items: center;
  justify-content: space-around;

  span {
    color: #2e2e2e;
  }

  img {
    width: 90%;
  }

  &:hover {
    transform: scale(1.04);
    transition: 0.4s;
    cursor: pointer;
  }
`;
