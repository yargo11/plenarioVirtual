import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
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
  id: string;
}

interface IColegiados {
  ds_tipo_sessao: string;
  dt_sessao: string;
  nr_hora_inicial: string;
  nr_hora_final: string;
  // id_sessao: number;
  dt_realizacao_sessao: string;
}

interface IColegiadoByID {
  ds_orgao_julgador_colegiado: string;
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

interface ISessao {
  id_processo_trf: number;
  nr_ordem: number;
  situacao_julgamento: string;
  nr_processo: string;
  ds_orgao_julgador_relator: string;
  ds_orgao_julgador_vencedor: string;
  ds_classe_judicial: string;
  ds_proclamacao_decisao: string;
  // assunto: IProcesso {};
}

const Processo: React.FC = () => {
  const [colegiados, setColegiados] = useState<IColegiados[]>([]);
  const [colegiadoByID, setColegiadoByID] = useState<IColegiadoByID>({
    ds_orgao_julgador_colegiado: '',
  });
  const [processo, setProcesso] = useState<IProcesso[]>([]);
  const [placar, setPlacar] = useState<IPlacar[]>([]);
  const [sessoes, setSessao] = useState<ISessao[]>([]);
  const { params } = useRouteMatch<IParams>();

  const processoNumber = Number(params.processo);

  useEffect(() => {
    loadPlacar();
    loadColegiados();
    loadProcesso();
    loadSessao();
    loadColegiadoByID();
  }, []);

  const loadProcesso = async () => {
    const response = await api.get(`/processos/${params.processo}`);

    setProcesso(response.data.data.assuntos[0].ds_assunto_trf);
  };

  const loadSessao = async () => {
    const response = await api.get(
      `/sessoes/${params.sessao}/processos/?page=1&perPage=2000`,
    );

    setSessao(response.data.data);
  };

  const loadPlacar = async () => {
    const response = await api.get(
      `/sessoes/${params.sessao}/placar/${params.processo}/`,
    );

    setPlacar(response.data);
  };

  const loadColegiadoByID = async () => {
    const response = await api.get(
      `/orgaos-julgadores-colegiados/${params.id}`,
    );

    setColegiadoByID(response.data.data);
  };

  const typeVotos = placar.map(placa => {
    return placa.voto;
  });

  const includesRelator = typeVotos.includes('Acompanha o relator');
  const includesOrdemConcedida = typeVotos.includes('Ordem concedida');
  const includesImpedido = typeVotos.includes('Impedido');
  const includesAcaoJulgadaProcedente = typeVotos.includes(
    'Ação julgada procedente',
  );
  const includesAcaoJulgadaImprocedente = typeVotos.includes(
    'Ação julgada improcedente',
  );
  const includesNaoProferido = typeVotos.includes('Não proferido');
  const includesNaoProvido = typeVotos.includes('Não provido');
  const includesOutros = typeVotos.includes('Outros');
  const includesSuspeito = typeVotos.includes('Suspeito');

  const loadColegiados = async () => {
    const response = await api.get(`/sessoes/${params.sessao}`);

    setColegiados(response.data.data);
  };

  return (
    <>
      <Header />
      <Breadcrumb>
        <p>
          <Link to="/">Colegiados</Link> -{' '}
          <Link to={`/colegiados/${params.id}/2021/page=1`}>
            Sessões {colegiadoByID.ds_orgao_julgador_colegiado}
          </Link>{' '}
          -{' '}
          <Link to={`/colegiados/${params.id}/sessao/${params.sessao}`}>
            Lista de Processos
          </Link>{' '}
        </p>
      </Breadcrumb>
      <Colegiado>
        <h1>{colegiadoByID.ds_orgao_julgador_colegiado}</h1>
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
        {sessoes
          .filter(sessao => sessao.id_processo_trf === processoNumber)
          .map(sessao => (
            <Informacoes2 key={sessao.id_processo_trf}>
              <div>
                <p>Ordem</p>
                <p>{sessao.nr_ordem}</p>
              </div>
              <div>
                <p>Situação</p>
                <p>{sessao.situacao_julgamento}</p>
              </div>
              <div>
                <p>Consulta pública do processo</p>
                <p>
                  <a
                    href={`https://pje2g.tjrn.jus.br/consultapublica/ConsultaPublica/listView.seam?numero=${sessao.nr_processo}`}
                  >
                    {sessao.nr_processo}
                  </a>
                </p>
              </div>
              <div>
                <p>Relator</p>
                <p>{sessao.ds_orgao_julgador_relator}</p>
              </div>
              <div>
                <p>Voto vencedor</p>
                <p>{sessao.ds_orgao_julgador_vencedor}</p>
              </div>
              <div>
                <p>Classe judicial</p>
                <p>{sessao.ds_classe_judicial}</p>
              </div>
              <div>
                <p>Assunto</p>

                {`${processo}`}
              </div>
              <div>
                <p>Proclamação do resultado</p>
                <p>{sessao.ds_proclamacao_decisao}</p>
              </div>
            </Informacoes2>
          ))}

        <h2>Placar</h2>

        {includesOrdemConcedida ? <h4>Ordem Concedida</h4> : <p />}

        <Cards>
          {placar
            .filter(votos => votos.voto === 'Ordem concedida')
            .map(votos => (
              <Card key={votos.id_orgao_julgador}>
                {votos.ds_orgao_julgador}
              </Card>
            ))}
        </Cards>

        {includesAcaoJulgadaProcedente ? (
          <h4>Ação julgada procedente</h4>
        ) : (
          <p />
        )}

        <Cards>
          {placar
            .filter(votos => votos.voto === 'Ação julgada procedente')
            .map(votos => (
              <Card key={votos.id_orgao_julgador}>
                {votos.ds_orgao_julgador}
              </Card>
            ))}
        </Cards>

        {includesAcaoJulgadaImprocedente ? (
          <h4>Ação julgada procedente</h4>
        ) : (
          <p />
        )}

        <Cards>
          {placar
            .filter(votos => votos.voto === 'Ação julgada improcedente')
            .map(votos => (
              <Card key={votos.id_orgao_julgador}>
                {votos.ds_orgao_julgador}
              </Card>
            ))}
        </Cards>

        {includesRelator ? <h4>Acompanha o relator</h4> : <p />}
        <Cards>
          {placar
            .filter(
              votos =>
                votos.voto === 'Acompanha o relator' &&
                votos.ds_orgao_julgador !== 'Gab. da Presidência no Pleno' &&
                votos.ds_orgao_julgador !== 'Gab. da Vice-Presidência no Pleno',
            )
            .map(votos => (
              <Card key={votos.id_orgao_julgador}>
                {votos.ds_orgao_julgador}
              </Card>
            ))}
        </Cards>

        {includesImpedido ? <h4>Impedido</h4> : <p />}

        <Cards>
          {placar
            .filter(
              votos =>
                votos.voto === 'Impedido' &&
                votos.ds_orgao_julgador !== 'Gab. da Presidência no Pleno' &&
                votos.ds_orgao_julgador !== 'Gab. da Vice-Presidência no Pleno',
            )
            .map(votos => (
              <Card key={votos.id_orgao_julgador}>
                {votos.ds_orgao_julgador}
              </Card>
            ))}
        </Cards>
        {includesNaoProferido ? <h4>Não proferido</h4> : <p />}
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

        {includesNaoProvido ? <h4>Não provido</h4> : <p />}
        <Cards>
          {placar
            .filter(
              votos =>
                votos.voto === 'Não provido' &&
                votos.ds_orgao_julgador !== 'Gab. da Presidência no Pleno' &&
                votos.ds_orgao_julgador !== 'Gab. da Vice-Presidência no Pleno',
            )
            .map(votos => (
              <Card key={votos.id_orgao_julgador}>
                {votos.ds_orgao_julgador}
              </Card>
            ))}
        </Cards>

        {includesSuspeito ? <h4>Suspeito</h4> : <p />}
        <Cards>
          {placar
            .filter(
              votos =>
                votos.voto === 'Suspeito' &&
                votos.ds_orgao_julgador !== 'Gab. da Presidência no Pleno' &&
                votos.ds_orgao_julgador !== 'Gab. da Vice-Presidência no Pleno',
            )
            .map(votos => (
              <Card key={votos.id_orgao_julgador}>
                {votos.ds_orgao_julgador}
              </Card>
            ))}
        </Cards>

        {includesOutros ? <h4>Outros</h4> : <p />}
        <Cards>
          {placar
            .filter(
              votos =>
                votos.voto === 'Outros' &&
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
