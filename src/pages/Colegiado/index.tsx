import React, { useState, useEffect, FormEvent } from 'react';
import { Link, Redirect, useRouteMatch } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import { FiEdit, FiChevronRight, FiClock } from 'react-icons/fi';
import api from '../../services/api';

import Header from '../../components/Header';

import {
  Breadcrumb,
  ColegiadoC,
  Colegio,
  Resultados,
  Sessao,
  ResultadosLeft,
  ResultadosRight,
} from './styles';

interface IColegiados {
  ds_orgao_julgador_colegiado: string;
  ds_tipo_sessao: string;
  dt_sessao: string;
  nr_horario_inicio: string;
  id_sessao: number;
  id_orgao_julgador_colegiado: number;
}

interface IColegiadoByID {
  ds_orgao_julgador_colegiado: string;
}

interface IResultados {
  total: number;
  next_page_url?: string | undefined;
  prev_page_url?: string;
  last_page: number;
  from: number;
  to: number;
}

interface IParams {
  id: string;
  year: string;
  page: string;
}

const Colegiado: React.FC = () => {
  const [colegiados, setColegiados] = useState<IColegiados[]>([]);
  const [colegiadoByID, setColegiadoByID] = useState<IColegiadoByID>({
    ds_orgao_julgador_colegiado: '',
  });
  const [resultados, setResultados] = useState<IResultados>({
    total: 0,
    next_page_url: '',
    prev_page_url: '',
    last_page: 0,
    from: 0,
    to: 0,
  });
  const { params } = useRouteMatch<IParams>();
  const [selValue, setSelValue] = useState(params.year);

  useEffect(() => {
    loadColegiados();
    loadResultados();
    loadColegiadoByID();
  }, []);

  const loadColegiados = async () => {
    const response = await api.get(
      `/orgaos-julgadores-colegiados/${params.id}/sessoes?ano=${params.year}&perPage=30&page=${params.page}`,
    );

    setColegiados(response.data.data.data);
  };

  const loadResultados = async () => {
    const response = await api.get(
      `/orgaos-julgadores-colegiados/${params.id}/sessoes?ano=${params.year}&perPage=30&page=${params.page}`,
    );

    setResultados(response.data.data);
  };

  const loadColegiadoByID = async () => {
    const response = await api.get(
      `/orgaos-julgadores-colegiados/${params.id}`,
    );

    setColegiadoByID(response.data.data);
  };

  let nextPage = '';
  if (resultados.next_page_url) {
    nextPage = resultados.next_page_url.slice(-1);
  }

  let prevPage = '';
  if (resultados.prev_page_url) {
    prevPage = resultados.prev_page_url.slice(-1);
  }

  colegiados.sort((a, b) => (a.id_sessao > b.id_sessao ? -1 : 1));

  return (
    <>
      <Header />
      <Breadcrumb>
        <p>
          <Link to="/">Colegiados</Link> - Sessões{' '}
          {colegiadoByID.ds_orgao_julgador_colegiado}
        </p>
      </Breadcrumb>

      <ColegiadoC>
        <h1>Sessões de Julgamentos</h1>

        <Colegio>
          <div>
            <div>
              <h4>Colegiado</h4>
              <h1>
                {colegiadoByID.ds_orgao_julgador_colegiado}
                {/* <FiEdit size={30} /> */}
              </h1>
            </div>
            <div>
              <h4>Ano da Sessão</h4>
              <select
                value={selValue}
                onChange={e => setSelValue(e.target.value)}
              >
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
              </select>
            </div>
          </div>
          <hr />
          <a href={`/colegiados/${params.id}/${selValue}/1`}>Filtrar</a>
        </Colegio>

        <Resultados>
          <ResultadosLeft>
            <p>
              Total de Resultados: <strong> {resultados.total}</strong>
            </p>
            <br />
            <p>
              Mostrando de <strong>{resultados.from}</strong> à{' '}
              <strong>{resultados.to}</strong>
            </p>
          </ResultadosLeft>
          <ResultadosRight>
            {`${prevPage}` ? (
              <a href={`/colegiados/${params.id}/${params.year}/${prevPage}`}>
                Página Anterior
              </a>
            ) : (
              ''
            )}
            {`${nextPage}` ? (
              <a href={`/colegiados/${params.id}/${params.year}/${nextPage}`}>
                Próxima Página
              </a>
            ) : (
              ''
            )}
          </ResultadosRight>
        </Resultados>

        {colegiados
          .map(colegios => (
            <Link
              key={colegios.id_sessao}
              to={`/colegiados/${params.id}/sessao/${colegios.id_sessao}/page=1`}
            >
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
