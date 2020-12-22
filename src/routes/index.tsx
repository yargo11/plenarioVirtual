import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Sessao from '../pages/Sessao';
import Colegiado from '../pages/Colegiado';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/colegiado" component={Colegiado} />
    <Route path="/sessao" exact component={Sessao} />
  </Switch>
);

export default Routes;
