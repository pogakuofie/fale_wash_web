import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

// config
import { createFirebaseApp } from "../config/clientFirebase";

// context
import { AuthContextProvider } from "../context/AuthContext";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  height:100vh;
  overflow:hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

interface ThemeInterface {
  colors: {
    primary: string;
  };
}

const theme: ThemeInterface = {
  colors: {
    primary: "#0070f3",
  },
};

function App({ Component, pageProps }: AppProps) {
  const app = createFirebaseApp();

  return (
    <AuthContextProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
