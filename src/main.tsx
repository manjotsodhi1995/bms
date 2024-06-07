import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="">
    <React.StrictMode>
      <div className="max-w-screen overflow-hidden ">
        <div className="overflow-x-hidden max-w-screen">
          <div className="overflow-x-hidden absolute rounded-full w-[70vw] h-[70vw] bg-gradient-to-br from-[#A87863] via-[#C68D55] to-[#C5C168] bg-opacity-20 backdrop-blur-[700px] animate-float -z-10 top-[-50vw] left-[-25vw]"></div>
          <div className=" overflow-x-hidden absolute rounded-full w-[40vw] h-[40vw] bg-gradient-to-br from-[#63a878] via-[#5593c6] to-[#c5689d] bg-opacity-20 backdrop-blur-[80px] animate-float -z-10 top-[80vh] left-[-20vw]"></div>
          <div className=" overflow-x-hidden absolute rounded-full w-[30vw] h-[30vw] bg-gradient-to-br from-[#A87863] via-[#9bc655] to-[#c56868] bg-opacity-20 backdrop-blur-[80px] animate-float -z-10 top-[150vh] right-[-10vw]"></div>{" "}
        </div>
        <div className="relative overflow-x-hidden home ">
          <App />
        </div>
      </div>
    </React.StrictMode>
  </GoogleOAuthProvider>
);