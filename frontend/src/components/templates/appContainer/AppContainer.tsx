import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const AppContainer = () => {
  const [isDark, setIsDark] = useState(false);

  // Sync state with HTML class list on mount and change
  useEffect(() => {
    // Check local storage or prefers-color-scheme
    const isDarkTheme =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(isDarkTheme);
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <div className="w-full min-h-screen">
      <Outlet />
      <button
        onClick={toggleDarkMode}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-color-border bg-surface hover:bg-surface-hover text-sm font-semibold transition-all shadow-xs cursor-pointer text-(--color-text-primary) fixed bottom-4 right-4 z-50"
        title="Toggle theme"
      >
        {isDark ? (
          <>
            <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728A9 9 0 115.636 5.636m12.728 12.728A9 9 0 015.636 5.636" />
            </svg>
          </>
        ) : (
          <>
            <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </>
        )}
      </button>
    </div>
  );
};

export { AppContainer };
