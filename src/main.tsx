import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './globals.css'
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="">
    <React.StrictMode>
      <div className="max-w-screen overflow-hidden ">
       
        <div className="relative overflow-x-hidden home ">
          <App />
        </div>
      </div>
    </React.StrictMode>
  </GoogleOAuthProvider>
);