// src/components/PWAUpdateBanner.tsx
import { useSWUpdate } from "../../hooks/UpdateSw";

export default function PWAUpdateBanner() {
  const { isUpdateAvailable, updateApp } = useSWUpdate();

  if (!isUpdateAvailable) return null;

  return (
    <div className="fixed bottom-0 w-full bg-blue-600 text-white p-4 flex justify-between items-center z-50">
      <span>🚀 New version available.</span>
      <button
        className="bg-white text-blue-600 px-4 py-2 rounded ml-4"
        onClick={updateApp}
      >
        Update
      </button>
    </div>
  );
}
