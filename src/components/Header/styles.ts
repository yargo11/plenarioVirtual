import styled from 'styled-components';

export const HHeader = styled.div`
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
