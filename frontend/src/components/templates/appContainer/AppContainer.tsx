import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Button } from "../../atoms";

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
    <div className="w-full min-h-screen flow-root">
      <Outlet />
      <Button
        onClick={toggleDarkMode}
        variant="ghost"
        size="icon"
        className="fixed bottom-4 right-4"
      >
        {isDark ? (
          <Sun className="text-amber-400" />
        ) : (
          <Moon className="text-indigo-500" />
        )}
      </Button>
    </div>
  );
};

export { AppContainer };
