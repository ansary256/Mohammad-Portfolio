

import MainLayout from "./layouts/MainLayout";
import SideBar from "./Components/SideBar";
import ContentContainer from "./Components/ContentContainer";
import { useState } from "react";

function App() {


  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <MainLayout>
      <SideBar value={value} handleChange={handleChange} />
      <ContentContainer />
    </MainLayout>
  );
}

export default App;
