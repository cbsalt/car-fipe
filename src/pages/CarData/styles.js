import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background: #edf7fe;
  padding: 20px;
  text-align: center;
`;

export const WrapperCard = styled.div`
  background: #fff;
  padding: 32px;
  border-radius: 8px;
  margin: 20px 32px;
  text-align: left;

  div {
    display: grid;
    grid-template-columns: 1fr 0.2fr;

    h2 {
      font-size: 28px;
      margin-bottom: 10px;
   }

   button {
    background: #4ee44e;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
   }

   p {
    color: #f00;
    font-weight: 600;
   }
  }


  .description {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 40px;
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
