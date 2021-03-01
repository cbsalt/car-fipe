import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 32px;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 2rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.8);
    text-transform: uppercase;
  }

  div {
    position: relative;
  }

  input {
    width: 30rem;
    height: 2.8rem;
    border: none;
    border-radius: 4px;
    outline: none;
    padding-left: 1rem;
    font-size: 22px;
    background: #ffffff;
    border: solid 1px #483d8b;
  }

  span {
    color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    transition: 0.4s;
    font-size: 22px;
    pointer-events: none;
}

  input:focus + span{
    top: 0;
    left: 10px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
    padding: 0 3px;
    background: #ffffff;
    border-radius: 4px;
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;

    h3 {
      display: none;
    }

    input {
      width: 20rem;
      height: 2.5rem;
    }

    span {
      font-size: 16px;
    }
  }
`;
