import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoTJRN from '../../assets/tjrn.png';
import logoPlenario from '../../assets/plenario-virtual_logo.png';
import {
  Header,
  TJRN,
  Plenario,
  Breadcrumb,
  Colegiados,
  Colegio,
} from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <div>
          <TJRN>
            <img src={logoTJRN} alt="Logo TJRN" />
            <div>
              <h3>Tribunal de Justiça</h3>
              <h5>Rio Grande do Norte</h5>
            </div>
          </TJRN>
          <hr />
          <Plenario>
            <img src={logoPlenario} alt="Logo Plenário Virtual" />
            <p>
              Os julgamentos do Plenário Virtual são públicos e poderão ser
              acompanhados nesta página. Aqui serão lançados os votos do relator
              e demais magistrados, com registro do resultado da votação.
            </p>
            <hr />
          </Plenario>
        </div>
      </Header>

      <Breadcrumb>
        <p>Hello Migalhas</p>
      </Breadcrumb>

      <Colegiados>
        <h1>Colegiados</h1>
        <hr />
        <a href="teste">
          <Colegio>
            <h3>Tribunal Pleno</h3>

            <FiChevronRight size={20} />
          </Colegio>
        </a>
        <a href="teste">
          <Colegio>
            <h3>Tribunal Pleno</h3>

            <FiChevronRight size={20} />
          </Colegio>
        </a>
        <a href="teste">
          <Colegio>
            <h3>Tribunal Pleno</h3>

            <FiChevronRight size={20} />
          </Colegio>
        </a>
        <a href="teste">
          <Colegio>
            <h3>Tribunal Pleno</h3>

            <FiChevronRight size={20} />
          </Colegio>
        </a>
        <a href="teste">
          <Colegio>
            <h3>Tribunal Pleno</h3>

            <FiChevronRight size={20} />
          </Colegio>
        </a>
        <a href="teste">
          <Colegio>
            <h3>Tribunal Pleno</h3>

            <FiChevronRight size={20} />
          </Colegio>
        </a>
        <a href="teste">
          <Colegio>
            <h3>Tribunal Pleno</h3>

            <FiChevronRight size={20} />
          </Colegio>
        </a>
      </Colegiados>
    </>
  );
};

export default Home;
