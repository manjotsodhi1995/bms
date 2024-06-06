import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="">
    <React.StrictMode>
      <div className="max-w-screen overflow-hidden">
        <div className="overflow-x-hidden max-w-screen">
          <div className="overflow-x-hidden absolute rounded-full w-[70vw] h-[70vw] bg-gradient-to-br from-[#A87863] via-[#C68D55] to-[#C5C168] bg-opacity-20 backdrop-blur-[700px] animate-float -z-10 top-[-50vw] left-[-25vw]"></div>
          <div className=" overflow-x-hidden absolute rounded-full w-[60vw] h-[60vw] bg-[#79AEEC66] bg-opacity-20 backdrop-blur-[80px] animate-float -z-10 top-[50vh] left-[-20vw]"></div>
        </div>
        <div className="relative home overflow-x-hidden">
          <App />
        </div>
      </div>
    </React.StrictMode>
  </GoogleOAuthProvider>
);