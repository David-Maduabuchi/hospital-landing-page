import "./App.css";
import { useRegisterSW } from "virtual:pwa-register/react";
import InstallPrompt from "./components/InstallPrompt/InstallPrompt";
import PWAUpdateBanner from "./components/PWAUpdate/PWAUpdate";

function App() {
  const { updateServiceWorker } = useRegisterSW({
    onNeedRefresh() {
      if (confirm("New version available. Refresh?")) {
        updateServiceWorker();
      }
    },
  });

  return (
    <div>
      <InstallPrompt />
      <PWAUpdateBanner />
      Hospital Main Page has just been updated
    </div>
  );
}

export default App;
