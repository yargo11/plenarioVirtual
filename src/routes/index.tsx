import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Sessao from '../pages/Sessao';
import Colegiado from '../pages/Colegiado';
import Processo from '../pages/Processo';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/colegiados/:id+" component={Colegiado} />
    <Route path="/sessao/:id_sessao+" component={Sessao} />
    <Route path="/processo" component={Processo} />
  </Switch>
);

export default Routes;
