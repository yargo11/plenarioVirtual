import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';

import { Breadcrumb, Colegiado, Table, TD } from './styles';

interface IProcesso {
  id_sessao_pauta_processo_trf: string;
  nr_processo: string;
  ds_classe_judicial: string;
  ds_orgao_julgador_relator: string;
  situacao_julgamento: string;
  nr_ordem: number;
}

interface IParams {
  idSessao: string;
}

const Sessao: React.FC = () => {
  const [colegiados, setColegiados] = useState<IProcesso[]>([]);
  const { params } = useRouteMatch<IParams>();

  useEffect(() => {
    loadColegiados();
  }, []);

  const loadColegiados = async () => {
    const response = await api.get(
      `/sessoes/${params.idSessao}/processos/?page=1&perPage=2000`,
    );

    setColegiados(response.data.data);
  };

  // colegiados.sort((a, b) =>
  //   a.id_orgao_julgador_colegiado > b.id_orgao_julgador_colegiado ? 1 : -1,
  // );

  return (
    <>
      <Header />
      <Breadcrumb>
        <p>Hello Migalhas</p>
      </Breadcrumb>

      <Colegiado>
        <h1>Tribunal Pleno</h1>
        <br />
        <h2>Informações da Sessão</h2>
        <br />

        <div>
          <div>
            <h3>Abertura da sessão</h3>
            <h3>Fechamento da sessão</h3>
            <h3>Tipo de sessão</h3>
          </div>

          <div>
            <h3>16/12/2020 8:00</h3>
            <h3>Não informado</h3>
            <h3>ORDINÁRIA</h3>
          </div>
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
          {colegiados.map(processo => (
            <Link key={processo.id_sessao_pauta_processo_trf} to="/processo">
              <tr>
                <TD>{processo.nr_ordem}</TD>
                <TD>{processo.ds_classe_judicial}</TD>
                <TD>{processo.nr_processo}</TD>
                <TD>{processo.ds_orgao_julgador_relator}</TD>
                <TD>{processo.situacao_julgamento}</TD>
              </tr>
            </Link>
          ))}
        </Table>
      </Colegiado>
    </>
  );
};

export default Sessao;
