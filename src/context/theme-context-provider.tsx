import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { COLORS, COLORS_DARK_MODE } from "ui/colors";

export const ThemeContext = createContext({
  toggleThemeCallback: () => {},
  setDarkTheme: () => {},
  setLightTheme: () => {},
  theme: "light",
});

export const ThemeContextProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const isDarkThemeSelected = theme === "dark";

  const toggleThemeCallback = () =>
    setTheme(isDarkThemeSelected ? "light" : "dark");

  const setDarkTheme = () => setTheme("dark");
  const setLightTheme = () => setTheme("light");

  const currentThemeFile = isDarkThemeSelected ? COLORS_DARK_MODE : COLORS;
  return (
    <ThemeContext.Provider
      value={{ toggleThemeCallback, setDarkTheme, setLightTheme, theme }}
    >
      <ThemeProvider theme={currentThemeFile}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
