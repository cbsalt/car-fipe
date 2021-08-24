import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 12px 48px;
  font-size: 22px;
  align-items: center;
  justify-content: space-between;
  background: #483d8b;
;

  img {
    border-radius: 50%;
    background: #fff;
    width: 50px;
    box-shadow: 0px 2px 4px 2px rgba(0,0,0,0.1);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    font-size: 0.8rem;
    color: #fff;
    font-weight: bold;
  }

  .count {
    position: relative;
  }

  span {
    color: #483d8b;
    font-size: 14px;
    font-weight: bold;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 20%;
    text-align: center;
  }
`;
