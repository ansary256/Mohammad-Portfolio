

import MainLayout from "./layouts/MainLayout";
import SideBar from "./Components/SideBar";
import ContentContainer from "./Components/ContentContainer";
import { useState } from "react";
import BTNMenu from "./Components/BTNMenu";
import TabPanel from "./Components/Tabs/TabPanel";

function App() {


  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <MainLayout value={value} handleChange={handleChange}>
      <BTNMenu value={value} handleChange={handleChange} />
      <SideBar value={value} handleChange={handleChange} isMobile={false} />
      <ContentContainer value={value}>
        <TabPanel value={value} index={0}><h3>اسلاید 1</h3></TabPanel>
        <TabPanel value={value} index={1}><h3>اسلاید 2</h3></TabPanel>
        <TabPanel value={value} index={2}><h3>اسلاید 3</h3></TabPanel>
        <TabPanel value={value} index={3}><h3>اسلاید 4</h3></TabPanel>
        <TabPanel value={value} index={4}><h3>اسلاید 5</h3></TabPanel>
      </ContentContainer>
    </MainLayout>
  );
}

export default App;
