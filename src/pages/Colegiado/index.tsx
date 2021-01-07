import React from 'react';
import { FiEdit, FiChevronRight, FiClock } from 'react-icons/fi';

import Header from '../../components/Header';

import { Breadcrumb, ColegiadoC, Colegio, Resultados, Sessao } from './styles';

const Colegiado: React.FC = () => {
  return (
    <>
      <Header />
      <Breadcrumb>
        <p>Hello Migalhas</p>
      </Breadcrumb>

      <ColegiadoC>
        <h1>Sessões de Julgamentos</h1>

        <Colegio>
          <div>
            <div>
              <h4>Escolher Colegiado</h4>
              <h1>
                Tribunal Pleno
                <FiEdit size={30} />
              </h1>
            </div>
            <div>
              <h4>Ano da Sessão</h4>
              <select>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
          </div>
          <hr />
          <button type="submit">Filtrar</button>
        </Colegio>

        <Resultados>
          Total de Resultados
          {'  '}
          <strong>61</strong>
        </Resultados>

        <Sessao>
          <div>
            <h2>27/01/2020</h2>
          </div>
          <div>
            <span>
              <h2>Seção cível</h2>
              <FiChevronRight size={30} />
            </span>
            <p>Tipo de Sessão: Ordinária</p>
            <hr />
            <span>
              <FiClock size={19} />
              8:00
            </span>
          </div>
        </Sessao>

        <Sessao>
          <div>
            <h2>27/01/2020</h2>
          </div>
          <div>
            <span>
              <h2>Seção cível</h2>
              <FiChevronRight size={30} />
            </span>
            <p>Tipo de Sessão: Ordinária</p>
            <hr />
            <span>
              <FiClock size={19} />
              8:00
            </span>
          </div>
        </Sessao>
        <Sessao>
          <div>
            <h2>27/01/2020</h2>
          </div>
          <div>
            <span>
              <h2>Seção cível</h2>
              <FiChevronRight size={30} />
            </span>
            <p>Tipo de Sessão: Ordinária</p>
            <hr />
            <span>
              <FiClock size={19} />
              8:00
            </span>
          </div>
        </Sessao>
      </ColegiadoC>
    </>
  );
};

export default Colegiado;
