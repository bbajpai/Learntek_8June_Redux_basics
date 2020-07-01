import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

//to connect with redux
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
//import reducers's index.js
import reducers from './reducers';

//create store
const createStoreWithMiddlewre = applyMiddleware()(createStore);


//smoviesList();



ReactDOM.render(
  <Provider  store={createStoreWithMiddlewre(reducers)}>
      <App/>
  </Provider>
, document.querySelector('#root'));




