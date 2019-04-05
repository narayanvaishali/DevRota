import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { AppProvider } from './containers/App';
import * as serviceWorker from './serviceWorker';
import theme from './theme';


ReactDOM.render(
  <AppProvider theme={theme}>
    <App />
  </AppProvider>, document.getElementById('root'),
);
// registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
