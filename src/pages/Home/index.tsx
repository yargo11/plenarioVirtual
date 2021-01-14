import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import Header from '../../components/Header';

import { Breadcrumb, Colegiados, Colegio, Resultados } from './styles';

interface Colegiado {
  id_orgao_julgador_colegiado: number;
  ds_orgao_julgador_colegiado: string;
}

const Home: React.FC = () => {
  const [colegiados, setColegiados] = useState<Colegiado[]>([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    loadColegiados();
  }, []);

  const loadColegiados = async () => {
    const response = await api.get(`/orgaos-julgadores-colegiados?perPage=20`);

    setColegiados(response.data.data);
  };

  colegiados.sort((a, b) =>
    a.id_orgao_julgador_colegiado > b.id_orgao_julgador_colegiado ? 1 : -1,
  );

  return (
    <>
      <Header />

      <Breadcrumb>
        <p>Hello Migalhas</p>
      </Breadcrumb>

      <Colegiados>
        <h1>Colegiados</h1>
        <hr />
        {colegiados
          .map(colegio => (
            <Link
              key={colegio.id_orgao_julgador_colegiado}
              to={`/colegiados/${colegio.id_orgao_julgador_colegiado}/${year}`}
            >
              <Colegio>
                <h3>{colegio.ds_orgao_julgador_colegiado}</h3>

                <FiChevronRight size={20} />
              </Colegio>
            </Link>
          ))
          .sort()}

        <Resultados>
          Total de resultados
          {'  '}
          {colegiados.length}
        </Resultados>
      </Colegiados>
    </>
  );
};

export default Home;
