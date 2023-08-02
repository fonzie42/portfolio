import { ThemeProvider } from "styled-components";

import "./App.css";
import { GlobalStyle } from "./theme/globalStyle";
import { COLORS, COLORS_DARK_MODE } from "./ui/colors";
import { useState } from "react";

import { Toggle } from "./ui/Toggle";

function App({ children }: { children: JSX.Element }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const isDarkThemeSelected = theme === "dark";
  const onToggleCallback = () =>
    setTheme(isDarkThemeSelected ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkThemeSelected ? COLORS_DARK_MODE : COLORS}>
      <GlobalStyle />
      <Toggle
        checked={isDarkThemeSelected}
        onToggleCallback={onToggleCallback}
      />
      {children}
    </ThemeProvider>
  );
}

export default App;
