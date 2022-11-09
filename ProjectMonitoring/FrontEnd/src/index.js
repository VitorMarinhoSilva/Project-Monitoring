import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { msalConfig } from './AuthConfig';
import { PublicClientApplication } from "@azure/msal-browser";
import {MsalProvider} from "@azure/msal-react"
// import reportWebVitals from './reportWebVitals';

const msalInstance = new PublicClientApplication(msalConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

      <MsalProvider instance={msalInstance} >
          <App />
      </MsalProvider>
);

