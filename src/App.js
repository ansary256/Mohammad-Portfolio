

import { Helmet, HelmetProvider } from "react-helmet-async";
import MainLayout from "./layouts/MainLayout";

function App() {

  return (
    <HelmetProvider>
      <Helmet>
        <title>Mohammad Ansari</title>
      </Helmet>
      <MainLayout>

      </MainLayout>
    </HelmetProvider>
  );
}

export default App;
