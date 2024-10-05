import React from "react";
import App from "./App.tsx";
import "./index.css";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { hydrateRoot } from "react-dom/client";
const queryClient = new QueryClient();

hydrateRoot(
  document.getElementById("root"),
  <GoogleOAuthProvider clientId="827617420193-4377ne3q1sqbf65sdgsmcee817iulpt3.apps.googleusercontent.com">
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
