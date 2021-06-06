import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '../src/components/assets/css/style.css';
import '../src/components/assets/css/style2.css';

import '../src/components/assets/lib/bootstrap/bootstrap.min.css';
import '../src/components/assets/fonts/font-awesome/css/font-awesome.css';

import { Provider } from 'react-redux'
import store from './store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,

  document.getElementById('root')
);

