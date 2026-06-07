import { createTheme, ThemeProvider } from "@mui/material/styles";
import stylisRTLPlugin from "@mui/stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache"
import { prefixer } from "stylis";

import MainLayout from "./layouts/MainLayout";
import Header from "./UIComponent/Header";

function App() {

  //create custom them
  const theme = createTheme(
    {
      direction: "rtl"
    }
  );
  //create RTL Cache
  const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin]
  });

  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>محمد انصاری</title>
          </Helmet>
          <MainLayout>
            <Header />
          </MainLayout>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
