import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import api from '../../services/api';

import Header from '../../components/Header';

import { Breadcrumb, Colegiado, Table, TD } from './styles';

interface ISessao {
  id_sessao_pauta_processo_trf: string;
  nr_processo: string;
  ds_classe_judicial: string;
  ds_orgao_julgador_relator: string;
  situacao_julgamento: string;
  nr_ordem: number;
  id_processo_trf: string;
  id_sessao: string;
}

interface IColegiados {
  ds_orgao_julgador_colegiado: string;
  ds_tipo_sessao: string;
  dt_sessao: string;
  nr_hora_inicial: string;
  nr_hora_final: string;
  id_sessao: number;
  id_orgao_julgador_colegiado: number;
  dt_abertura_sessao: string;
  dt_realizacao_sessao: string;
  sala: string;
}

interface IParams {
  idSessao: string;
}

const Sessao: React.FC = () => {
  const [colegiados, setColegiados] = useState<IColegiados[]>([]);
  const [sessoes, setSessao] = useState<ISessao[]>([]);
  const { params } = useRouteMatch<IParams>();

  useEffect(() => {
    loadSessao();
    loadColegiados();
  }, []);

  const loadSessao = async () => {
    const response = await api.get(
      `/sessoes/${params.idSessao}/processos/?page=1&perPage=2000`,
    );

    setSessao(response.data.data);
  };

  const loadColegiados = async () => {
    const response = await api.get(`/sessoes/${params.idSessao}`);

    setColegiados(response.data.data);
  };

  // colegiados.sort((a, b) =>
  //   a.id_orgao_julgador_colegiado > b.id_orgao_julgador_colegiado ? 1 : -1,
  // );

  return (
    <>
      <Header />
      <Breadcrumb>
        <p>Hello Migalas.</p>
      </Breadcrumb>

      <Colegiado>
        <h1>Tribunal Pleno</h1>
        <br />
        <h2>Informações da Sessão</h2>
        <br />

        <div>
          {colegiados.map(sessao => (
            <>
              <div>
                <h3>Abertura da sessão</h3>
                <h3>Fechamento da sessão</h3>
                <h3>Tipo de sessão</h3>
              </div>
              <div key={sessao.id_sessao}>
                <h3>
                  {format(parseISO(sessao.dt_sessao), 'dd/MM/yyyy')}{' '}
                  {sessao.nr_hora_inicial}
                </h3>
                <h3>
                  {`${sessao.dt_realizacao_sessao}` === 'null'
                    ? 'Não Informado'
                    : `${format(
                        parseISO(sessao.dt_realizacao_sessao),
                        'dd/MM/yyyy',
                      )}`}{' '}
                  {sessao.nr_hora_final}
                  {/* {sessao.nr_hora_final} */}
                </h3>
                <h3>{sessao.ds_tipo_sessao}</h3>
              </div>
            </>
          ))}
        </div>
        <br />
        <h2>Lista de Processos</h2>

        <Table>
          <tr>
            <th>Ordem</th>
            <th>Classe</th>
            <th>Processo</th>
            <th>Relator</th>
            <th>Situação</th>
          </tr>
          {sessoes.map(sessao => (
            <Link
              key={sessao.id_sessao_pauta_processo_trf}
              to={`/processo/${sessao.id_sessao}/${sessao.id_processo_trf}`}
            >
              <tr>
                <TD>{sessao.nr_ordem}</TD>
                <TD>{sessao.ds_classe_judicial}</TD>
                <TD>{sessao.nr_processo}</TD>
                <TD>{sessao.ds_orgao_julgador_relator}</TD>
                <TD>{sessao.situacao_julgamento}</TD>
              </tr>
            </Link>
          ))}
        </Table>
      </Colegiado>
    </>
  );
};

export default Sessao;
