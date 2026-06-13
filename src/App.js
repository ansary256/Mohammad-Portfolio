

import MainLayout from "./layouts/MainLayout";
import SideBar from "./Components/SideBar";
import ContentContainer from "./Components/ContentContainer";
import { useState } from "react";
import BTNMenu from "./Components/BTNMenu";

function App() {


  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <MainLayout>
      <BTNMenu/>
      <SideBar value={value} handleChange={handleChange} />
      <ContentContainer value={value} />
    </MainLayout>
  );
}

export default App;
