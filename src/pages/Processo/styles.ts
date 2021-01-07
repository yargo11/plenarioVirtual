import styled from 'styled-components';

export const Breadcrumb = styled.div`
  background: #637b80;
  color: #fff;
  height: 30px;
  padding: 5px;

  p {
    max-width: 1140px;
    margin: 0 auto;
  }
`;

export const Colegiado = styled.div`
  background: #fff;
  max-width: 1140px;
  margin: 20px auto;
  padding: 20px;
  color: #2f6772;

  h1 {
    margin: 30px 0px;
  }

  h2,
  h4 {
    margin: 20px 0px;
  }
`;

export const Informacoes = styled.div`
  display: grid;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    p {
      min-width: 300px;
      font-weight: bold;
      color: #4d4d4d;
      margin: 10px 0px;

      & + p {
        flex: 1;
        font-weight: normal;
      }
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 350px;
  padding: 20px;
  font-weight: bold;
  margin: 5px;

  border-left: 5px solid #2f6772;
  box-shadow: 0 1px 1px 0 rgba(74, 74, 74, 0.15),
    0 1px 2px 1px rgba(74, 74, 74, 0.15);

  transition: background-color 0.2s;

  &:hover {
    background-color: #f8f7f7;
  }
`;
