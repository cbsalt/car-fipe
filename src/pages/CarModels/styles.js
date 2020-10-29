import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background: #edf7fe;
  padding: 20px;

  h2 {
    padding: 0 32px;
  }
`;

export const WrapperCards = styled.div`
  margin: 32px;
  justify-items: center;
  display: flex;
  flex-direction: column;
`;

export const ModelCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 2px rgba(0,0,0,0.1);
  justify-content: space-around;
  padding: 0 12px;
  line-height: 2.4;
  color: #2e2e2e;

    strong {
      font-size: 22px;
      color: #000;
      font-weight: 400;
    }

  &:hover {
    transform: scale(1.01);
    transition: 0.4s;
    cursor: pointer;
  }
`;
