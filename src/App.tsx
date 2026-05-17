import "./App.css";
import { GlobalStyle } from "./theme/global-style";

import { ThemeContextProvider } from "context/theme-context-provider";

function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      {children}
    </ThemeContextProvider>
  );
}

export default App;
