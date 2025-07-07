/// <reference types="vite/client" />
/// <reference types="vite/client" />

declare module 'virtual:pwa-register/react' {
    export interface RegisterSWOptions {
      immediate?: boolean
      onNeedRefresh?: () => void
      onOfflineReady?: () => void
      onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void
      onRegisterError?: (error) => void
    }
  
    export function useRegisterSW(options?: RegisterSWOptions): {
      updateServiceWorker: (reloadPage?: boolean) => Promise<void>
    }
  }
  