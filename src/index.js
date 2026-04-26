import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components';
import { theme } from './ducks/global.styles';
import store from './ducks/store'
import { HashRouter, BrowserRouter } from 'react-router-dom';

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Provider store={store}>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
        </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
