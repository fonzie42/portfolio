import mingoExtraSmall from "./assets/logo/mingo_extra_small.svg";
import mingoMonochrome from "./assets/logo/mingo_monochrome.svg";
import mingoSimplified from "./assets/logo/mingo_simplified.svg";
import mingoSmall from "./assets/logo/mingo_small.svg";
import mingo from "./assets/logo/mingo.svg";
import mingoExtraSmallDark from "./assets/logo/mingo_extra_small_dark.svg";
import mingoMonochromeDark from "./assets/logo/mingo_monochrome_dark.svg";
import mingoSimplifiedDark from "./assets/logo/mingo_simplified_dark.svg";
import mingoSmallDark from "./assets/logo/mingo_small_dark.svg";
import mingoDark from "./assets/logo/mingo_dark.svg";
import { ThemeProvider } from "styled-components";

import "./App.css";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GlobalStyle } from "./theme/globalStyle";
import { Logo } from "./ui/logo";
import { COLORS, COLORS_DARK_MODE } from "./ui/colors";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  return (
    <ThemeProvider theme={theme === "light" ? COLORS : COLORS_DARK_MODE}>
      <GlobalStyle />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </ThemeProvider>
}

export default App
