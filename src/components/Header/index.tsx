import React from 'react';

import logoTJRN from '../../assets/tjrn.png';
import logoPlenario from '../../assets/plenario-virtual_logo.png';
import { HHeader, TJRN, Plenario } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <HHeader>
        <div>
          <TJRN>
            <img src={logoTJRN} alt="Logo TJRN" />
            <div>
              <h3>Tribunal de Justiça</h3>
              <h5>Rio Grande do Norte</h5>
            </div>
          </TJRN>
          <hr />
          <Plenario>
            <img src={logoPlenario} alt="Logo Plenário Virtual" />
            <p>
              Os julgamentos do Plenário Virtual são públicos e poderão ser
              acompanhados nesta página. Aqui serão lançados os votos do relator
              e demais magistrados, com registro do resultado da votação.
            </p>
            <hr />
          </Plenario>
        </div>
      </HHeader>
    </>
  );
};

export default Header;
