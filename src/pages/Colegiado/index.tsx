import React from 'react';
import { FiEdit } from 'react-icons/fi';

import Header from '../../components/Header';

import { Breadcrumb, ColegiadoC, Colegio, Resultados } from './styles';

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
      </ColegiadoC>
    </>
  );
};

export default Colegiado;
