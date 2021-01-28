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

export const ColegiadoC = styled.div`
  background: #fff;
  max-width: 1140px;
  margin: 30px auto;
  padding: 20px;
  color: #2f6772;

  a {
    text-decoration: none;
    color: #2f6772;
  }
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
    justify-content: flex-start;

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

      @media (max-width: 600px) {
        h1 {
          display: block;
        }
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
    display: block;
    color: #fff;
    background-color: #2f6772;
    border-color: #2f6772;

    width: 150px;
    margin-left: auto;
    padding: 10px;
  }

  @media (max-width: 600px) {
    button {
      width: 100%;
    }
  }
`;

export const Resultados = styled.div`
  background: #f8f7f7;
  max-width: 1140px;
  margin: 30px auto;
  padding: 20px;
  color: #2f6772;
`;

export const Sessao = styled.div`
  background: #f8f7f7;
  display: flex;
  flex-direction: row;
  cursor: pointer;

  margin: 10px 0px;

  border-left: 5px solid #2f6772;
  box-shadow: 0 1px 1px 0 rgba(74, 74, 74, 0.15),
    0 1px 2px 1px rgba(74, 74, 74, 0.15);

  transition: transform 0.2s;

  &:hover {
    transform: translateX(10px);
  }

  div {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    svg {
      margin-left: auto;
    }

    & + div {
      flex: 1;
    }
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;

    svg:nth-child(1) {
      margin-left: 0px;
      margin-right: 5px;
    }
  }

  p,
  span {
    margin: 5px 0px;
  }
`;
