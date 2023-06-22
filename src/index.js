import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.scss';
import './styles/common.scss';
import App from './App';

// if using styled-component --->
// import { ThemeProvider } from 'styled-components';
// import GlobalStyle from './styles/GlobalStyle';
// import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
