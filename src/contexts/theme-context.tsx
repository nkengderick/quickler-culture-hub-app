"use client";
import { createContext, useState, useEffect, useContext } from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    // Function to apply theme based on the provided value
    const applyTheme = (theme: string) => {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      setTheme(theme);
      localStorage.setItem("theme", theme);
    };

    // Load the saved theme or apply the system preference
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = systemTheme || savedTheme;

    applyTheme(initialTheme);

    // Listen for changes in the system theme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!savedTheme) { // Only update if the user hasn't selected a custom theme
        const newSystemTheme = e.matches ? "dark" : "light";
        applyTheme(newSystemTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    // Cleanup event listener on unmount
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
