import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// here this provider will provide our redux store to React applications
import  { Provider } from 'react-redux';

// now we will import store which we have created
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider  store = { store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

