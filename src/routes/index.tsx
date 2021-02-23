import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Sessao from '../pages/Sessao';
import Colegiado from '../pages/Colegiado';
import Processo from '../pages/Processo';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route
      path="/colegiados/:id/sessao/:sessao/processo/:processo+"
      component={Processo}
    />
    <Route
      path="/colegiados/:id/sessao/:idSessao/:page+"
      exact
      component={Sessao}
    />
    <Route path="/colegiados/:id/:year/:page+" exact component={Colegiado} />
  </Switch>
);

export default Routes;
