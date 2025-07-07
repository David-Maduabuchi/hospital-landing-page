// src/hooks/useSWUpdate.ts
import { useEffect, useState } from "react";

export function useSWUpdate() {
  const [waitingSW, setWaitingSW] = useState<ServiceWorker | null>(null);
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistration().then((reg) => {
        if (!reg) return;

        // listen for updates
        reg.addEventListener("updatefound", () => {
          const newSW = reg.installing;
          if (!newSW) return;

          newSW.addEventListener("statechange", () => {
            if (
              newSW.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              setWaitingSW(newSW);
              setIsUpdateAvailable(true);
            }
          });
        });
      });
    }
  }, []);

  const updateApp = () => {
    if (waitingSW) {
      waitingSW.postMessage({ type: "SKIP_WAITING" });
      window.location.reload();
    }
  };

  return { isUpdateAvailable, updateApp };
}
