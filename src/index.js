import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './styles/reset.scss';
import './styles/common.scss';
import App from './App';
import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS;
ReactGA.initialize(TRACKING_ID);

// if using styled-component --->
// import { ThemeProvider } from 'styled-components';
// import GlobalStyle from './styles/GlobalStyle';
// import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

);
