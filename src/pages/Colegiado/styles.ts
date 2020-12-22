import styled from 'styled-components';

export const Breadcrumb = styled.div`
  background: #637b80;
  color: #fff;
  height: 30px;

  p {
    max-width: 1140px;
    margin: 0 auto;
  }
`;

export const ColegiadoC = styled.div`
  background: #fff;
  max-width: 1140px;
  margin: 30px auto;
  padding: 20px;
  color: #2f6772;
`;

export const Colegio = styled.div`
  width: 100%;
  background: #f8f7f7;
  padding: 20px;

  display: flex;
  flex-direction: column;

  hr {
    margin: 15px 0px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
      &:first-child {
        width: 60%;
      }
      width: 40%;
      flex-direction: column;

      h1 {
        display: flex;
        align-items: center;
      }
      h4 {
        margin: 5px 0px;
      }

      select {
        width: 100%;
        height: 40px;
        padding: 5px 10px;
        color: gray;
        /* border: 2px solid gray; */
      }
    }
  }

  button {
    color: #fff;
    background-color: #2f6772;
    border-color: #2f6772;

    width: 150px;
    margin-left: auto;
    padding: 10px;
  }
`;

export const Resultados = styled.div`
  background: #f8f7f7;
  max-width: 1140px;
  margin: 30px auto;
  padding: 20px;
  color: #2f6772;
`;
