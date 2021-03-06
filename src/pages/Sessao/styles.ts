import styled from 'styled-components';

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  line-height: 30px;

  background: #637b80;
  color: #fff;
  height: 60px;
  padding: 5px;

  p {
    max-width: 1140px;
    margin: 0 auto;

    a {
      padding: 4px;
      text-decoration: none;
      color: #fff;
      border-bottom: 2px solid #2f6772;
      transition: border-bottom 0.2s;
      transition: background-color 0.2s;

      &:hover {
        border-bottom: none;
        background: #2f6772;
      }
    }
  }
`;

export const Pagina = styled.div`
  display: flex;
  margin-left: auto;
  width: 200px;

  a {
    width: 200px;
    text-decoration: none;
    color: #2f6772;
    border-bottom: 2px solid #2f6772;
    padding: 5px;
    text-align: center;
    transition: background-color 0.3s;

    &:hover {
      background-color: #265660;
      color: #fff;
    }
  }
`;

export const Colegiado = styled.div`
  background: #fff;
  max-width: 1140px;
  margin: 30px auto;
  padding: 20px;
  color: #2f6772;

  div {
    display: flex;
    flex-direction: row;
    max-width: 500px;
    justify-content: space-between;

    div {
      flex-direction: column;
      margin-right: 10px;
      h3 {
        margin: 5px 0px;
      }
    }
  }
`;

export const Table = styled.table`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px 0px;

  tr {
    display: flex;
    overflow-wrap: anywhere;
    text-align: center;
    th {
      width: 22.5%;
      padding: 10px 0px;
      border-bottom: 2px solid #637b80;
      /* text-align: left; */

      &:first-child {
        width: 10%;
      }
    }
  }

  a {
    text-decoration: none;
    color: #2f6772;

    tr {
      width: 100%;
      display: flex;
      flex-direction: row;
      padding: 10px 0px;
      margin: 5px 0px;

      &:first-child {
        /* padding: 5px 0px; */
        border-left: 5px solid #2f6772;
        box-shadow: 0 1px 1px 0 rgba(74, 74, 74, 0.15),
          0 1px 2px 1px rgba(74, 74, 74, 0.15);

        transition: transform 0.2s;

        &:hover {
          transform: translateX(10px);
        }
      }
    }
  }
`;

export const TD = styled.td`
  font-size: 14px;
  font-weight: bold;
  justify-content: center;
  align-items: center;

  display: flex;
  flex-direction: row;
  width: 22.5%;

  &:first-child {
    width: 10%;
  }
`;

export const Processo = styled.div`
  background: #fff;
  height: 56px;
  display: flex;
  align-items: center;
  margin: 10px 0;
  border: 0;
  border-left: 5px solid #2f6772;
  box-shadow: 0 1px 1px 0 rgba(74, 74, 74, 0.15),
    0 1px 2px 1px rgba(74, 74, 74, 0.15);

  transition: transform 0.2s;

  &:hover {
    transform: translateX(10px);
  }
`;
