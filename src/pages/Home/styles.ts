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

export const Resultados = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: #f8f7f7;
  height: 56px;
  width: 100%;
`;
