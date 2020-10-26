import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background: #edf7fe;
  padding: 20px;
`;

export const WrapperCards = styled.div`
  display: flex;
  margin: 20px 40px;
`;

export const ModelCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 2px rgba(0,0,0,0.1);
  margin-right: 16px;
  justify-content: space-around;

  img {
    align-self: center;
    width: 90%;
  }

  div {
    padding: 0 12px;
    line-height: 2.4;
    color: #2e2e2e;

    strong {
      font-size: 22px;
      color: #000;
      font-weight: 400;
    }

    p {
      font-size: 12px;
    }

    span {
      font-size: 16px;
    }

    .year {
      padding: 0;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
    }
  }

  &:hover {
    transform: scale(1.04);
    transition: 0.4s;
    cursor: pointer;
  }
`;
