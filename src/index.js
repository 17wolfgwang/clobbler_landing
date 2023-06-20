import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';

// if using styled-component --->
// import { ThemeProvider } from 'styled-components';
// import GlobalStyle from './styles/GlobalStyle';
// import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ThemeProvider>
    // <GlobalStyle/>
    <Router />
  // </ThemeProvider>
  );
