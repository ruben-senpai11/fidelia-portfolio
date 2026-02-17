import { useEffect, useState } from "react";

export default function useTheme() {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  // Hydrate le state depuis localStorage au montage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("LHarmonyTheme") as "light" | "dark";
      if (stored) {
        setThemeMode(stored);
      }
    }
  }, []);

  // Synchronise avec localStorage et le HTML
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("LHarmonyTheme", themeMode);
      document.documentElement.setAttribute("data-theme", themeMode);
    }
  }, [themeMode]);

  const handleToggle = () => {
    setThemeMode(prev => (prev === "light" ? "dark" : "light"));
  };

  return { themeMode, handleToggle };
}
