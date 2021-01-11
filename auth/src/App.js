import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Singin from './components/Signin';
import Singup from './components/Singup'

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history }) => {
  return ( 
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
          <Route path="/auth/singin" component={Singin} />
          <Route path="/auth/singup" component={Singup} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
