import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './App';

// MOUNT FUNCTION TO START UP THE APP
const mount = (el) => {
  const history = createMemoryHistory();
  ReactDom.render( <App history={history} />, el );
};

// IF WE ARE IN DEVELOPMENT AND IN ISOLATION,
// CALL MOUNT INMEDIATELY
if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot){
    mount(devRoot);
  }
}

// WE ARE RUNNING THROUGH CONTAINER
// AND WE SHOULD EXPORT MOUNT FUNCTION

export { mount };
