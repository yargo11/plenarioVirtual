import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';

import { Breadcrumb, Colegiado, Informacoes, Card, Cards } from './styles';

interface IProcesso {
  voto: string;
  ds_orgao_julgador: string;
}

interface IParams {
  processo: string;
  sessao: string;
}

const Processo: React.FC = () => {
  const [processo, setProcesso] = useState<IProcesso[]>([]);
  const { params } = useRouteMatch<IParams>();

  useEffect(() => {
    loadProcesso();
  }, []);

  const loadProcesso = async () => {
    const response = await api.get(`/sessoes/1642/placar/144690/`);

    setProcesso(response.data);

    console.log(typeof processo);
    console.log(processo);
  };

  return (
    <>
      <Header />
      <Breadcrumb>
        <p>Hello Migalhas</p>
      </Breadcrumb>
      <Colegiado>
        <h1>Tribunal Pleno</h1>
        <h2>Informações da sessão</h2>
        <Informacoes>
          <div>
            <p>Abertura da sessão</p>
            <p>16/12/2020 8:00</p>
          </div>
          <div>
            <p>Fechamento da sessão</p>
            <p>Tipo de sessão</p>
          </div>
          <div>
            <p>Não informado</p>
            <p>ORDINÁRIA</p>
          </div>
        </Informacoes>
        <h2>Informações do Processo</h2>
        <Informacoes>
          <div>
            <p>Ordem</p>
            <p>1</p>
          </div>
          <div>
            <p>Situação</p>
            <p>Julgado</p>
          </div>
          <div>
            <p>Consulta pública do processo</p>
            <p>0805546-73.2020.8.20.0000</p>
          </div>
          <div>
            <p>Relator</p>
            <p>
              Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
              Berenice Capuxu
            </p>
          </div>
          <div>
            <p>Voto vencedor</p>
            <p>
              Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
              Berenice Capuxu
            </p>
          </div>
          <div>
            <p>Classe judicial</p>
            <p>MANDADO DE SEGURANÇA CÍVEL</p>
          </div>
          <div>
            <p>Assunto</p>
            <p>Militar</p>
          </div>
          <div>
            <p>Proclamação do resultado</p>
            <p>
              O Tribunal, à unanimidade, em consonância com o parecer da 7ª
              Procuradoria de Justiça, concedeu a segurança, ficando prejudicado
              o exame do agravo interno, nos termos do voto do Relator. Foi lido
              o acórdão e aprovado.
            </p>
          </div>
        </Informacoes>

        <h2>Placar</h2>
        <h4>Ordem Concedida (1)</h4>
        <Cards>
          <Card>
            Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
            Berenice Capuxu
          </Card>
        </Cards>
        <h4>Acompanha o relator (10)</h4>
        <Cards>
          <Card>
            Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
            Berenice Capuxu
          </Card>
          <Card>
            Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
            Berenice Capuxu
          </Card>
          <Card>
            Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
            Berenice Capuxu
          </Card>
          <Card>
            Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
            Berenice Capuxu
          </Card>
          <Card>
            Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
            Berenice Capuxu
          </Card>
          <Card>
            Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
            Berenice Capuxu
          </Card>
          <Card>
            Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
            Berenice Capuxu
          </Card>
          <Card>
            Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
            Berenice Capuxu
          </Card>
          <Card>
            Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
            Berenice Capuxu
          </Card>
          <Card>
            Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
            Berenice Capuxu
          </Card>
        </Cards>
        <h4>Não proferido</h4>
        <Cards>
          <Card>
            Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
            Berenice Capuxu
          </Card>
          <Card>
            Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
            Berenice Capuxu
          </Card>
          <Card>
            Gab. Des. Claudio Santos no Pleno - Juíz(a) convocado(a) Dra.
            Berenice Capuxu
          </Card>
        </Cards>
      </Colegiado>
    </>
  );
};

export default Processo;
