import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  padding: 32px 48px;

  h2 {
    color: #646464;
    padding-bottom: 32px;
    border-bottom: 1px solid #d3d3d3;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 640px) {
    padding: 32px 28px;
  }
`;

export const WrapperModelsCards = styled.div`
  margin-top: 32px;
  justify-items: center;
  display: ${(props) => (props.selected ? 'none' : 'flex')};
  flex-direction: column;
`;

export const WrapperYearsCards = styled.div`
  margin-top: 32px;
  justify-items: center;
  display: ${(props) => (props.selected ? 'flex' : 'none')};
  flex-direction: column;
`;

export const ModelCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  background: #f2f4f6;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
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
    transition: 0.2s;
    cursor: pointer;
    background: #483d8b;

    strong {
      color: #fff;
    }
  }
`;
