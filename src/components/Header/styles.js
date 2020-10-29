import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px 52px;
  font-size: 22px;
  align-items: center;
  justify-content: space-between;
  background: #87cefa;

  img {
    border-radius: 50%;
    background: #fff;
    width: 5%;
    box-shadow: 0px 2px 4px 2px rgba(0,0,0,0.1);
  }

  input {
    width: 900px;
    height: 40px;
    border-radius: 16px;
    border: none;
    padding: 0 12px;
  }

  h3 {
    font-size: 14px;
    color: #646464;
    font-weight: 400;
  }
`;
