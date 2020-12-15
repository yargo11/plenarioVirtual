import styled from 'styled-components';

export const Header = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  background: #2f6772;

  div {
    /* max-width: 1140px;
    margin: 0 auto; */
  }
`;

export const TJRN = styled.div`
  max-width: 1140px;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  /* margin: 20px 0px; */

  img {
    height: 55px;
    width: auto;
    margin-right: 10px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Plenario = styled.div`
  flex-direction: column;
  max-width: 1140px;
  margin: 0 auto;
  hr {
    width: 100px;
    margin: 20px 0px;
  }
  img {
    margin: 20px 0px;
  }
  p {
    max-width: 700px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
  }
`;

export const Breadcrumb = styled.div`
  background: #637b80;
  color: #fff;
  height: 30px;

  p {
    max-width: 1140px;
    margin: 0 auto;
  }
`;

export const Colegiados = styled.div`
  background: #fff;
  max-width: 1140px;
  margin: 30px auto;
  padding: 20px;
  color: #2f6772;

  hr {
    margin: 20px 0px;
  }

  a {
    text-decoration: none;
    color: #2f6772;
  }
`;

export const Colegio = styled.div`
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

  h3 {
    margin-left: 20px;
  }
  svg {
    margin-left: auto;
  }

  &:hover {
    transform: translateX(10px);
  }
`;
