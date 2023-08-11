import "./App.css";
import { GlobalStyle } from "./theme/global-style";

import { ThemeContextProvider } from "./context/theme-context-provider";

function App({ children }: { children: JSX.Element }) {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      {children}
    </ThemeContextProvider>
  );
}

export default App;
