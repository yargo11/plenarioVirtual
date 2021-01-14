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
  margin: 30px auto;
  padding: 20px;
  color: #2f6772;

  div {
    display: flex;
    flex-direction: row;
    max-width: 400px;
    justify-content: space-between;

    div {
      flex-direction: column;
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
        padding: 5px 0px;
        border-left: 5px solid #2f6772;
        box-shadow: 0 1px 1px 0 rgba(74, 74, 74, 0.15),
          0 1px 2px 1px rgba(74, 74, 74, 0.15);

        transition: transform 0.2s;

        &:hover {
          transform: translateX(10px);
        }
      }

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
