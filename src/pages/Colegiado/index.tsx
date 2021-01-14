import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import { FiEdit, FiChevronRight, FiClock } from 'react-icons/fi';
import api from '../../services/api';

import Header from '../../components/Header';

import { Breadcrumb, ColegiadoC, Colegio, Resultados, Sessao } from './styles';

interface IColegiados {
  ds_orgao_julgador_colegiado: string;
  ds_tipo_sessao: string;
  dt_sessao: string;
  nr_horario_inicio: string;
  id_sessao: number;
  id_orgao_julgador_colegiado: number;
}

interface IParams {
  id: string;
  year: string;
}

const Colegiado: React.FC = () => {
  const [colegiados, setColegiados] = useState<IColegiados[]>([]);
  const [selValue, setSelValue] = useState('');
  const { params } = useRouteMatch<IParams>();

  useEffect(() => {
    loadColegiados();
  }, []);

  const loadColegiados = async () => {
    const response = await api.get(
      `/orgaos-julgadores-colegiados/${params.id}/sessoes?ano=${params.year}`,
    );

    setColegiados(response.data.data.data);
  };

  async function changeYear(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await api.get(
      `/orgaos-julgadores-colegiados/${params.id}/sessoes?ano=${selValue}`,
    );

    setColegiados(response.data.data.data);
  }

  colegiados.sort((a, b) => (a.id_sessao > b.id_sessao ? -1 : 1));

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
              <select
                value={selValue}
                onChange={e => setSelValue(e.target.value)}
              >
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
              </select>
            </div>
          </div>
          <hr />
          <form onSubmit={changeYear}>
            <button type="submit">Filtrar</button>
          </form>
        </Colegio>

        <Resultados>
          Total de Resultados
          {'  '}
          <strong>61</strong>
        </Resultados>

        {colegiados
          .map(colegios => (
            <Link key={colegios.id_sessao} to={`/sessao/${colegios.id_sessao}`}>
              <Sessao>
                <div>
                  <h2>{format(parseISO(colegios.dt_sessao), 'dd/MM/yyyy')}</h2>
                </div>
                <div>
                  <span>
                    <h2>{colegios.ds_orgao_julgador_colegiado}</h2>
                    <FiChevronRight size={30} />
                  </span>
                  <p>
                    Tipo de Sessão:
                    {colegios.ds_tipo_sessao}
                  </p>
                  <hr />
                  <span>
                    <FiClock size={19} />
                    {colegios.nr_horario_inicio}
                  </span>
                </div>
              </Sessao>
            </Link>
          ))
          .sort()}
      </ColegiadoC>
    </>
  );
};

export default Colegiado;
