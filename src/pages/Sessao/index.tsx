import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
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
}

interface IColegiados {
  ds_orgao_julgador_colegiado: string;
  ds_tipo_sessao: string;
  dt_sessao: string;
  nr_horario_inicio: string;
  nr_hora_final: string;
  id_sessao: number;
  id_orgao_julgador_colegiado: number;
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
    const response = await api.get(`/sessoes/1644`);

    setColegiados(response.data.data);

    console.log(colegiados);
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
              <div>
                <h3>
                  {sessao.dt_sessao}
                  {sessao.nr_horario_inicio}
                </h3>
                <h3>Não informado</h3>
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
            <Link key={sessao.id_sessao_pauta_processo_trf} to="/processo">
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
