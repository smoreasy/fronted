import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { Layout } from "./styles/Layout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <GlobalStyle />
          <Layout>
              <App />
          </Layout>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
