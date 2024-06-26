/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_SERVER_URL;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
