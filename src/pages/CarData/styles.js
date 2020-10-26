import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background: #edf7fe;
  padding: 20px;

  img {
    background: #fff;
    width: 600px;
  }
`;

export const WrapperCard = styled.div`
  background: #fff;
  padding: 32px;
  border-radius: 8px;

    h2 {
      font-size: 28px;

      span {
        color: #f00;
      }
   }

  .description {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
    margin-top: 24px;

    div {
      display: flex;
      flex-direction: column;
    }

    small {
      color: #878787;
    }

    span {
      font-weight: 600;
      font-size: 16px;
      color: #2e2e2e;
    }
  }
`;
