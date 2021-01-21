import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import api from '../../services/api';

import Header from '../../components/Header';

import {
  Breadcrumb,
  Colegiado,
  Informacoes1,
  Informacoes2,
  Card,
  Cards,
} from './styles';

interface IPlacar {
  voto: string;
  ds_orgao_julgador: string;
  id_orgao_julgador: string;
}

interface IParams {
  sessao: string;
  processo: string;
}

interface IColegiados {
  ds_tipo_sessao: string;
  dt_sessao: string;
  nr_hora_inicial: string;
  nr_hora_final: string;
  // id_sessao: number;
  dt_realizacao_sessao: string;
}

interface IProcesso {
  nr_processo: string;
  orgao_julgador: {
    ds_orgao_julgador: string;
  };
  classe_judicial: {
    ds_classe_judicial: string;
  };
  assuntos: {
    ds_assunto_trf: string;
  };
}

const Processo: React.FC = () => {
  const [colegiados, setColegiados] = useState<IColegiados[]>([]);
  const [processo, setProcesso] = useState<IProcesso[]>([]);
  const [placar, setPlacar] = useState<IPlacar[]>([]);
  const { params } = useRouteMatch<IParams>();

  useEffect(() => {
    loadPlacar();
    loadColegiados();
    loadProcesso();
  }, []);

  const loadPlacar = async () => {
    const response = await api.get(
      `/sessoes/${params.sessao}/placar/${params.processo}/`,
    );

    setPlacar(response.data);
  };

  const loadColegiados = async () => {
    const response = await api.get(`/sessoes/${params.sessao}`);

    setColegiados(response.data.data);
  };

  const loadProcesso = async () => {
    const response = await api.get(`/processos/${params.processo}`);

    setProcesso(response.data.data);
  };

  return (
    <>
      <Header />
      <Breadcrumb>
        <p>Hello Migalas</p>
      </Breadcrumb>
      <Colegiado>
        <h1>Tribunal Pleno</h1>
        <h2>Informações da sessão</h2>
        <Informacoes1>
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
                  </h3>
                  <h3>{sessao.ds_tipo_sessao}</h3>
                </div>
              </>
            ))}
          </div>
        </Informacoes1>
        <h2>Informações do Processo</h2>
        <Informacoes2>
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
        </Informacoes2>

        <h2>Placar</h2>

        <h4>Ordem Concedida (1)</h4>
        <Cards>
          {placar
            .filter(votos => votos.voto === 'Ordem concedida')
            .map(votos => (
              <Card key={votos.id_orgao_julgador}>
                {votos.ds_orgao_julgador}
              </Card>
            ))}
        </Cards>
        <h4>Acompanha o relator (10)</h4>
        <Cards>
          {placar
            .filter(votos => votos.voto === 'Acompanha o relator')
            .map(votos => (
              <Card key={votos.id_orgao_julgador}>
                {votos.ds_orgao_julgador}
              </Card>
            ))}
        </Cards>
        <h4>Não proferido</h4>
        <Cards>
          {placar
            .filter(
              votos =>
                votos.voto === 'Não proferido' &&
                votos.ds_orgao_julgador !== 'Gab. da Presidência no Pleno' &&
                votos.ds_orgao_julgador !== 'Gab. da Vice-Presidência no Pleno',
            )
            .map(votos => (
              <Card key={votos.id_orgao_julgador}>
                {votos.ds_orgao_julgador}
              </Card>
            ))}
        </Cards>
      </Colegiado>
    </>
  );
};

export default Processo;
