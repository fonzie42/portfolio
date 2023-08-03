import "./App.css";
import { GlobalStyle } from "./theme/globalStyle";

import { ThemeContextProvider } from "./context/themeContextProvider";

function App({ children }: { children: JSX.Element }) {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      {children}
    </ThemeContextProvider>
  );
}

export default App;
