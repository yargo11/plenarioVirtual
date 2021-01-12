import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';

import { Breadcrumb, Colegiado, Table, TD } from './styles';

interface IProcesso {
  nr_processo: string;
  ds_classe_judicial: string;
  ds_orgao_julgador_relator: string;
  situacao_julgamento: string;
}

interface IParams {
  id_sessao: string;
}

const Sessao: React.FC = () => {
  const [colegiados, setColegiados] = useState<IProcesso[]>([]);
  const params = useRouteMatch<IParams>();

  useEffect(() => {
    loadColegiados();
  }, []);

  const loadColegiados = async () => {
    const response = await api.get(
      `/sessoes/${params.id_sessao}/processos/?page=1&perPage=2000`,
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
          <tr>
            <TD>1</TD>
            <TD>MANDADO DE SEGURANÇA CÍVEL</TD>
            <TD>0805546-73.2020.8.20.0000</TD>
            <TD>
              Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
              Berenice Capuxu
            </TD>
            <TD>REGULAR</TD>
          </tr>
          <tr>
            <TD>1</TD>
            <TD>MANDADO DE SEGURANÇA CÍVEL</TD>
            <TD>0805546-73.2020.8.20.0000</TD>
            <TD>
              Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
              Berenice Capuxu
            </TD>
            <TD>REGULAR</TD>
          </tr>
          <tr>
            <TD>1</TD>
            <TD>MANDADO DE SEGURANÇA CÍVEL</TD>
            <TD>0805546-73.2020.8.20.0000</TD>
            <TD>Gab. Des. Vivaldo Pinheiro no Pleno</TD>
            <TD>REGULAR</TD>
          </tr>
        </Table>
      </Colegiado>
    </>
  );
};

export default Sessao;
