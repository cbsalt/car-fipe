import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  padding: 52px;
  text-align: center;

  .not-found {
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 70% auto;
    font-size: 2rem;
    align-items: center;

    span {
      font-size: 2.8rem;
      color: #483d8b;
      font-weight: bold;
    }

    p {
      grid-column-start: 2;
    }

    button {
      grid-row-start: 2;
      grid-column-start: 2;
      width: 232px;
      height: 42px;
      background: #483d8b;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: bold;
      justify-self: center;

      &:hover {
      transform: scale(1.04);
      transition: 0.2s;
      }
   }

   a {
     color: #fff;
   }

    img {
      max-width: 100%;
      grid-column-start: 1;
      grid-row: 1 / 3;
    }

    @media(max-width: 640px) {
      display: flex;
      flex-direction: column;

      p {
        font-size: 1rem;
      }

      span {
        font-size: 1.5rem;
      }

      img {
        margin: 24px;
      }
    }
  }
`;

export const WrapperCard = styled.div`
  background: #f2f4f6;
  padding: 32px;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 28px;
      margin-bottom: 10px;
   }

   button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: none;
    background: #32be8f;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);

    &:hover {
    transform: scale(1.04);
    transition: 0.2s;
    }
   }
  }

  strong {
    color: #f00;
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
      display: flex;
      align-items: center;
      margin-bottom: 4px;
    }

    span {
      font-weight: 600;
      font-size: 16px;
      color: #2e2e2e;
    }
  }
`;
