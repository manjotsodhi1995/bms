/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_SERVER_URL: string;
  readonly PLACES_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
